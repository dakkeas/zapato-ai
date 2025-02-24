// pages/api/generateComponent.js
import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function POST() {
  try {
    // Define paths
    const inputGltfPath = path.join(process.cwd(), 'public', 'result.gltf');
    const outputComponentPath = path.join(process.cwd(), 'public', 'Result.jsx');
    const gltfjsxPath = path.join(process.cwd(), 'node_modules', '.bin', 'gltfjsx');

    // Check if the input GLTF file exists
    if (!fs.existsSync(inputGltfPath)) {
      return NextResponse.json(
        { message: 'GLTF file not found' },
        { status: 404 }
      );
    }

    // Command to generate React component using gltfjsx
    const command = `${gltfjsxPath} ${inputGltfPath} --transform --output ${outputComponentPath}`;

    // Execute the command
    await execAsync(command);

    // Respond with success
    return NextResponse.json({ message: 'Component generation complete' });
  } catch (error) {
    console.error('Error during component generation:', error);
    return NextResponse.json(
      { message: 'Component generation failed', error},
      { status: 500 }
    );
  }
}
