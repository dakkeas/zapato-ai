import react from 'react'

import {Download, Sparkles} from 'lucide-react'
import Loader from './3Dloader'
import Image from 'next/image'
// import { convertGlbtoGltf } from '../lib/glbtogltf'


export default function Result () {

    const handleConversionAndGeneration = async () => {
    try {
      // Step 1: Convert GLB to GLTF
      let response = await fetch('/api/glbtogltf', { method: 'POST' });
      let data = await response.json();

      if (response.ok) {
        console.log('GLB to GLTF Conversion:', data.message);

        // Step 2: Generate React Component from GLTF
        response = await fetch('/api/generateComponent', { method: 'POST' });
        data = await response.json();

        if (response.ok) {
          console.log('Component Generation:', data.message);
          alert('Component generation successful!');
        } else {
          console.error('Component Generation Error:', data.error);
          alert('Component generation failed.');
        }
      } else {
        console.error('GLB to GLTF Conversion Error:', data.error);
        alert('GLB to GLTF conversion failed.');
      }
    } catch (error) {
      console.error('Error during the process:', error);
      alert('An error occurred during the process.');
    }
    };
    
    return (
        <div className="flex flex-col bg-white rounded-md shadow-lg p-10 gap-5 w-full max-w-screen h-full" >
            <div className="text-3xl font-semibold text-black mb-2">
                Generate
            </div>
            <div className="flex flex-row gap-5 items-stretch">
                <div className="flex flex-col gap-5">
                    <div className="relative">

                        <div className="w-96 h-96 rounded-m relative mb-5">

                            <Image
                            src="/running_shoe.jpeg"
                            fill
                            alt='Running Shoe'
                            className="object-cover rounded-md shadow-md"
                            />
                        </div>
                        <div className="absolute bottom-9 right-4 bg-custom-light-grey  text-white px-3 py-1 rounded-full flex flex-row gap-2 items-center justify-center">
                            <Sparkles size={16} color="grey"></Sparkles>
                            <div className="text-gray-500 text-center text-sm font-medium">AI Generated</div>
                        </div>
                    </div>



                    <div className="caret-transparent cursor-pointer hover:bg-custom-light-grey text-sm text-center font-medium border-2 border-black text-black px-11 py-4 rounded-sm justify-center items-center flex flex-row gap-2">
                        <Download size={20} color="black" />
                        <div>
                        Download Image
                        </div>
                    </div>

                    <div className="caret-transparent cursor-pointer hover:bg-custom-light-grey text-sm text-center font-medium border-2 border-black text-black px-11 py-4 rounded-sm justify-center items-center flex flex-row gap-2">
                        <Download size={20} color="black" />
                        <div>
                        Download Mesh File
                        </div>
                    </div>



                </div>
                <div className="bg-gray-200 flex-1 rounded-md">
                    <Loader></Loader>
                </div>



            </div>

                <div className="caret-transparent cursor-pointer hover:bg-custom-light-grey text-sm text-center font-medium border-2 border-black text-black px-11 py-4 rounded-sm justify-center items-center flex flex-row gap-2"
                onClick={handleConversionAndGeneration}
                >
                    <div>
                    Test
                    </div>
                </div>


            <div>

            </div>

        </div>
    )
}

