import { NextResponse } from "next/server";
import fs from "node:fs";
import axios from "axios";
import FormData from "form-data";

export async function POST() {
    try {
        const imagePath = "./public/result.jpeg"; // Ensure this image exists before proceeding

        if (!fs.existsSync(imagePath)) {
            return NextResponse.json({ error: "Image not found" }, { status: 400 });
        }

        const payload = {
            image: fs.createReadStream(imagePath),
        };

        const response = await axios.postForm(
            `https://api.stability.ai/v2beta/3d/stable-point-aware-3d`,
            axios.toFormData(payload, new FormData()),
            {
                validateStatus: undefined,
                responseType: "arraybuffer",
                headers: { Authorization: `Bearer ${process.env.STABILITY_API_KEY}` },
            }
        );

        if (response.status !== 200) {
            throw new Error(`${response.status}: ${response.data.toString()}`);
        }

        const modelPath = "./public/result.glb";
        fs.writeFileSync(modelPath, Buffer.from(response.data));

        return NextResponse.json({ 
            message: "3D model saved successfully", 
            filePath: "/result.glb" 
        });

    } catch (error) {
        console.error("Error generating 3D model:", error);
        return NextResponse.json({ error: "3D generation failed" }, { status: 500 });
    }
}

