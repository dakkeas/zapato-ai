import { NextResponse } from "next/server";
import fs from "node:fs";
import axios from "axios";
import FormData from "form-data";

export async function POST(req: Request) {
    
    try {
        const { definedPrompt, selectedImageFormat, selectedModelOption } = await req.json();

        if (!definedPrompt || !selectedImageFormat || !selectedModelOption) {
            return NextResponse.json({ error: "Missing fields" }, { status: 400 });
        }

        const payload = {
            prompt: definedPrompt,
            output_format: selectedImageFormat,
        };

        const response = await axios.postForm(
            `https://api.stability.ai/v2beta/stable-image/generate/${selectedModelOption === "Stable Image Ultra" ? "ultra" : "core"}`,
            axios.toFormData(payload, new FormData()),
            {
                validateStatus: undefined,
                responseType: "arraybuffer",
                headers: { 
                    Authorization: `Bearer ${process.env.STABILITY_API_KEY}`, 
                    Accept: "image/*"
                },
            }
        );

        if (response.status !== 200) {
            throw new Error(`${response.status}: ${response.data.toString()}`);
        }

        const imagePath = `./public/result.${selectedImageFormat}`;
        fs.writeFileSync(imagePath, Buffer.from(response.data));

        return NextResponse.json({ 
            message: "Image saved successfully", 
            filePath: `/result.${selectedImageFormat}` 
        });

    } catch (error) {
        console.error("Error generating image:", error);
        return NextResponse.json({ error: "Image generation failed" }, { status: 500 });
    }
}
