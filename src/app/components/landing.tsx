import React from 'react';
import Image from 'next/image';
import Link from 'next/link'

export default function Landing() {
  return (
    <div className="flex flex-col items-center bg-custom-light-grey gap-10 ">
      <div className="flex flex-col items-center justify-center gap-10">
        <h1 className="text-5xl font-medium text-center ">Empowering Shoe Makers with <br></br>Artificial Intelligence</h1>
        <p className="">Generate hyper-realistic shoe prototypes at the click of a button, 3D print ready.</p>
        <div className="flex -mb-16 gap-4">
          <Link href='/dashboard' className="text-sm bg-custom-dark-green text-white px-10 py-4 rounded-sm font-medium">
            Get Started
           </Link>
          <button className="text-sm border border-black text-black px-10 py-4 rounded-sm font-medium">Learn More</button>
        </div>
      </div>
      <div className='relative rounded-lg bg-transparent top-20'>
        <div className="flex gap-16 bg-transparent">
            <Image
            className='rounded-md shadow-xl'
            style={{objectFit: 'cover'}}
                src="/green_sneaker.jpg"
                height={400}
                width={500}
                alt='Green Sneaker'
            />
            <Image
            className='rounded-md shadow-xl'
            style={{objectFit: 'cover'}}
                src="/green_sneaker_2.jpg"
                height={400}
                width={500}
                alt='Green Sneaker'
            />
        </div>
       <div/>
      </div>
    </div>
  )
}