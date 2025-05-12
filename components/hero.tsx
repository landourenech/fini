import React from 'react'
import Header from "@/components/header"
export default function Hero() {
  return (
    <div className='bg-[url("/images/hero.png")] h-screen bg-cover bg-center flex flex-col  '>
    
     <Header />

    <section className='flex  flex-col justify-center items-center gap-2 pt-10 m-6'>
    <h1 className='text-[#f4ed20] max-sm:text-[1rem] max-md:text-[2rem] text-[4rem]  font-bold text-center'> LE GABON DU CTRI </h1>
      <p className='text-[#fFF] text-justify'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet labore sequi nam ipsa architecto tenetur magnam ab tempora? Dolorem sapiente animi similique aut sit consequatur, voluptatum porro beatae laboriosam dolores. </p>
      <button className='bg-[#f4ed20] text-green-900 px-4 py-2 rounded font-semibold hover:bg-yellow-300 transition'>
        CTA
      </button>
    </section>
    </div>
  )
}

    


