import { NextResponse } from 'next/server';
import { ConvertGLBtoGltf } from 'gltf-import-export';
import fs from 'fs';
import path from 'path';

// API handler for POST requests
export async function POST() {
  try {
    // Define paths
    const inputGlbPath = path.join(process.cwd(), 'public', '/result.glb'); // Replace 'yourfile.glb' with the actual file name
    const outputGltfPath = path.join(process.cwd(), 'public', '/result.gltf');

    // Perform the conversion
    ConvertGLBtoGltf(inputGlbPath, outputGltfPath);

    // Optionally read the converted file (for demonstration)
    const gltfContent = fs.readFileSync(outputGltfPath, 'utf8');
    const gltfJson = JSON.parse(gltfContent); // Parse the GLTF content

    // Respond with success
    return NextResponse.json({
      message: 'Conversion complete',
      gltf: gltfJson,
    });
  } catch (error) {
    console.error('Error during conversion:', error);
    return NextResponse.json(
      { message: 'Conversion failed', error: error.message },
      { status: 500 }
    );
  }
}
