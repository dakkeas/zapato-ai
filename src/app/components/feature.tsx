import react from 'react'
import Image from 'next/image';



const Feature = () => {
    return (
        <div className='flex flex-col justify-center items-center  w-full'>
            <div className="w-2/3 gap-20 mt-40 flex flex-col">
                <div
                className="text-5xl text-center font-medium"
                >Go further, faster with Zapato AI’s Seamless Image-to-3D Shoe Generation
                </div>

                <div className='flex flex-col gap-20'>
                    <div className="p-12 flex bg-custom-dark-green shadow-xl flex-row gap-20">
                        <div className="flex gap-3 flex-col justify-center items-start">
                            <div className="text-5xl text-white">Design the Perfect Shoe in Seconds</div>
                            <div className="text-gray-300 text-sm">Simply describe your vision, and Zapato AI transforms your idea into a high-quality 3D shoe model—ready for prototyping, customization, or virtual display.</div>
                            <button className="bg-custom-light-green text-white px-10 py-4 rounded-sm mt-10 font-medium text-sm">Explore</button>
                        </div>
                        <div className="relative w-1/2 h-96 bg-white rounded-md">
                            <Image
                            fill
                            className="object-cover rounded-md"
                            src="/black_shoe.jpg"
                            alt='Black Sneaker'
                            />
                        </div>
                    </div>

                    <div className="p-12 flex bg-custom-dark-brown shadow-xl flex-row gap-20">
                        <div className="flex gap-3 flex-col justify-center items-start">
                            <div className="text-5xl text-white">AI-Powered Precision & Customization</div>
                            <div className="text-gray-100 text-sm">Zapato AI ensures every generated 3D model is detailed and optimized for various use cases—from digital fashion to manufacturing-ready blueprints.</div>
                            <button className="bg-custom-light-brown text-white px-10 py-4 rounded-sm mt-10 font-medium text-sm">Explore</button>
                        </div>
                        <div className="relative w-1/2 h-96 bg-white rounded-md">
                            <Image
                            className="object-cover rounded-md"
                            fill
                            src="/white_orange_shoe.jpg"
                            alt='White and Orange Sneaker'
                            />
                        </div>
                    </div>

                    <div className="p-12 flex bg-custom-red shadow-xl flex-row gap-20">
                        <div className="flex gap-3 flex-col justify-center items-start">
                            <div className="text-5xl text-white">Seamless 3D Model Integration</div>
                            <div className="text-gray-300 text-sm">Export your AI-generated shoe models effortlessly into your favorite 3D software, game engines, or manufacturing pipelines with industry-standard formats.</div>
                            <button className="bg-red-400 text-white px-10 py-4 rounded-sm mt-10 text-sm font-medium">Explore</button>
                        </div>
                        <div className="relative w-1/2 h-96 bg-white rounded-md">
                            <Image
                            src="/red_shoe.jpg"
                            fill
                            className="object-cover rounded-md"
                            alt='Red Sneaker'
                            />
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default Feature;
