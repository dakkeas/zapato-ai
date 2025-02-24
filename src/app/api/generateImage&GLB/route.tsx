import { NextResponse } from "next/server";
import axios from "axios";
import fs from "fs/promises"; // Async file handling

export async function POST(req: Request) {
  try {
    const { definedPrompt, selectedImageFormat, selectedModelOption } = await req.json();

    if (!definedPrompt || !selectedImageFormat || !selectedModelOption) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    console.log("Generating image...");
    const payload1 = {
      prompt: definedPrompt,
      output_format: selectedImageFormat,
    };

    const response1 = await axios.post(
      `https://api.stability.ai/v1beta/stable-image/generate/${selectedModelOption === "stableImageUltra" ? "ultra" : "core"}`,
      payload1,
      {
        headers: {
          Authorization: `Bearer sk-MYAPIKEY`,
          Accept: "image/*",
          "Content-Type": "application/json",
        },
        responseType: "arraybuffer",
      }
    );

    if (response1.status !== 200) {
      throw new Error(`Image API failed: ${response1.status}`);
    }

    // Save the image to a temporary file
    const imagePath = `/result.${selectedImageFormat}`;
    await fs.writeFile(imagePath, Buffer.from(response1.data));

    console.log("Generating 3D model...");
    const formData = new FormData();
    formData.append("image", await fs.readFile(imagePath));

    const response2 = await axios.post(
      `https://api.stability.ai/v2beta/3d/stable-fast-3d`,
      formData,
      {
        headers: {
          Authorization: `Bearer sk-MYAPIKEY`,
          "Content-Type": "multipart/form-data",
        },
        responseType: "arraybuffer",
      }
    );

    if (response2.status !== 200) {
      throw new Error(`3D API failed: ${response2.status}`);
    }

    // Save the GLB file
    const glbPath = `/result.glb`;
    await fs.writeFile(glbPath, Buffer.from(response2.data));

    return NextResponse.json({ imageUrl: imagePath, glbUrl: glbPath }, { status: 200 });
  } catch (error: any) {
    console.error("Error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
