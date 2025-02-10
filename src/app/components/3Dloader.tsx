import React, { useRef, useState } from 'react'
import {Canvas} from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei"

export default function Loader () {
  // This reference will give us direct access to the mesh
  return (
    <div>
        <Canvas>
            <OrbitControls/>
            <mesh>
                <boxGeometry args={[5, 5, 5]} />
                <meshStandardMaterial color="orange" />
            </mesh>
        </Canvas>
    </div>



  )
}


