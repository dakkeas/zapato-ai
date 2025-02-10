import react from 'react'

import {Download} from 'lucide-react'
import Loader from './3Dloader'
import Image from 'next/image'


export default function Result () {
    return (
        <div className="flex flex-col bg-white rounded-md shadow-lg p-10 gap-5">
            <div className="text-3xl font-semibold text-black mb-2">
                Generate
            </div>
            <div className="flex flex-row gap-5">
                <div className="flex flex-col gap-5">
                    <div className="w-96 h-96 rounded-m relative mb-5">
                        <Image
                        src="/green_sneaker.jpg"
                        fill
                        alt='Green Sneaker'
                        className="object-cover rounded-md shadow-md"
                        />
                        <div>image goes here</div>
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


            <div>

            </div>

        </div>
    )
}

