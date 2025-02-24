import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls} from "@react-three/drei";
import {Model} from '../../../public/Result';


export default function Loader() {
  return (
    <>
        <Canvas camera={{ position: [0, 0, 1] }} className="w-full h-full max-w-full max-h-full rounded-md shadow-md">
          <ambientLight></ambientLight>
          <Suspense fallback={null}>
            <OrbitControls enableZoom={false}></OrbitControls>
            {/* <Model></Model> */}
          </Suspense>
          <Environment preset="warehouse" background></Environment>

        </Canvas>
    </>
  );
}


