import React, { useEffect, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import {Model} from '../../../public/Result';
// import PlaceholderModel from '../../..ji/public/result/placeholder';
// import dynamic from 'next/dynamic';
// Placeholder component to be displayed if Result.jsx is not found
// const PlaceholderModel = dynamic(() =>jk import('../../../public/placeholdermodel/placeholder'), { ssr: false })
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


