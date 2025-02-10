import React from 'react';
import Image from 'next/image';

export default function FeatureBottom() {
  return (
    <div className="mt-20 items-center flex flex-col justify-center w-full bg-black">
        <div className="flex flex-col w-2/3">
            <div className="text-white text-5xl font-medium text-left mt-20">
                Diverse, Talented and <br /> Experienced Team
            </div>
            <div className="flex gap-10 my-20">

                <div className="flex flex-col gap-5 min-h-[500px]">
                    <div className="relative w-full h-[400px]">
                        <Image
                        src="/person_1.jpg"
                        fill
                        alt='John Doe'
                        className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="text-white font-medium text-xl">John Doe</div>
                        <div className="text-sm text-gray-400">
                            Lead AI Engineer at Zapato AI. John specializes in developing algorithms for generating hyper-realistic shoe images from text queries.
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5 min-h-[500px]">
                    <div className="relative w-full h-[400px]">
                        <Image
                        src="/person_2.jpg"
                        fill
                        alt='Jane Smith'
                        className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="text-white font-medium text-xl">Jane Smith</div>
                        <div className="text-sm text-gray-400">
                            3D Modeling Expert at Zapato AI. Jane is responsible for converting generated shoe images into 3D printable formats.
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5 min-h-[500px]">
                    <div className="relative w-full h-[400px]">
                        <Image
                        src="/person_3.jpg"
                        fill
                        alt='Alice Johnson'
                        className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="text-white font-medium text-xl">Alice Johnson</div>
                        <div className="text-sm text-gray-400">
                            Product Manager at Zapato AI. Alice oversees the development and integration of AI technologies into the shoe design process.
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5 min-h-[500px]">
                    <div className="relative w-full h-[400px]">
                        <Image
                        src="/person_4.jpg"
                        fill
                        alt='Bob Brown'
                        className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="text-white font-medium text-xl">Bob Brown</div>
                        <div className="text-sm text-gray-400">
                            Marketing Specialist at Zapato AI. Bob focuses on promoting the innovative AI-driven shoe design solutions to a global audience.
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

