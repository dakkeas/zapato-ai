import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { exec } from "child_process";
import { promisify } from "util";
import { ConvertGLBtoGltf } from "gltf-import-export";

const execAsync = promisify(exec);

export async function POST() {
    try {
        const modelPath = path.join(process.cwd(), "public", "result.glb");
        if (!fs.existsSync(modelPath)) {
            return NextResponse.json({ error: "GLB model not found" }, { status: 400 });
        }

        // Convert GLB to GLTF
        const gltfPath = path.join(process.cwd(), "public", "result.gltf");
        ConvertGLBtoGltf(modelPath, gltfPath);

        // Convert GLTF to JSX
        const jsxPath = path.join(process.cwd(), "public", "Result.jsx");
        const gltfjsxPath = path.join(process.cwd(), "node_modules", ".bin", "gltfjsx");
        await execAsync(`${gltfjsxPath} ${gltfPath} --transform --output ${jsxPath}`);

        return NextResponse.json({ message: "GLTF converted to JSX", filePath: "/Result.jsx" });
    } catch (error) {
        console.error("Error converting GLB:", error);
        return NextResponse.json({ error: "GLB conversion failed" }, { status: 500 });
    }
}
