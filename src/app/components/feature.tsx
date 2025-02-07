import react from 'react'




const Feature = () => {
    return (
        <div className='flex flex-col justify-center items-center  w-full'>
            <div className="w-2/3 gap-20 mt-40 flex flex-col">
                <div
                className="text-5xl text-center font-medium"
                >Go further, faster with Zapatos AI's integrated Image to 2D generation
                </div>

                <div className='flex flex-col gap-20'>
                    <div className="p-12 flex bg-custom-dark-green rounded-lg shadow-xl flex-row gap-20">
                        <div className="flex gap-3 flex-col justify-center items-start">
                            <div className="text-5xl text-white">The essential shoe generator at your fingertips</div>
                            <div className="text-gray-300 text-sm">Manage everyday banking, maximize yield, safeguard cash, and access growth capital – all in one platform and in partnership with leading banks.</div>
                            <button className="bg-custom-light-green text-white px-10 py-4 rounded-sm mt-10 font-medium text-sm">Book a demo</button>
                        </div>
                        <div className="w-1/2 h-96 bg-white rounded-md"></div>
                    </div>

                    <div className="p-12 flex bg-custom-grey rounded-lg shadow-xl flex-row gap-20">
                        <div className="flex gap-3 flex-col justify-center items-start">
                            <div className="text-5xl text-white">The essential shoe generator at your fingertips</div>
                            <div className="text-gray-300 text-sm">Manage everyday banking, maximize yield, safeguard cash, and access growth capital – all in one platform and in partnership with leading banks.</div>
                            <button className="bg-slate-400 text-white px-10 py-4 rounded-sm mt-10 font-medium text-sm">Book a demo</button>
                        </div>
                        <div className="w-1/2 h-96 bg-white rounded-md"></div>
                    </div>

                    <div className="p-12 flex bg-custom-red rounded-lg shadow-xl flex-row gap-20">
                        <div className="flex gap-3 flex-col justify-center items-start">
                            <div className="text-5xl text-white">The essential shoe generator at your fingertips</div>
                            <div className="text-gray-300 text-sm">Manage everyday banking, maximize yield, safeguard cash, and access growth capital – all in one platform and in partnership with leading banks.</div>
                            <button className="bg-red-400 text-white px-10 py-4 rounded-sm mt-10 text-sm font-medium">Book a demo</button>
                        </div>
                        <div className="w-1/2 h-96 bg-white rounded-md"></div>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default Feature;
