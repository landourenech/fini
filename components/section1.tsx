import Image from 'next/image';

export default function Section1() {
  return (
    <section className='grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 m-6 gap-2'>
  <div className='flex flex-col border rounded-lg shadow-2xl gap-2'> 
        <div>
           <Image
        src="/card1.png"
        alt="Card 1"
        width={150}
        height={150}
        className='w-full rounded-t-lg'
        />
        </div>
        <div className='flex flex-col items-end mx-2 pb-2 '>
          <p>Lorem ipsum </p>
          <button className='bg-red-600  rounded-sm text-white px-2 py-1 -left'>CTA</button>
        </div>
        </div>
        <div className='flex flex-col border rounded-lg shadow-2xl gap-2'> 
        <div>
           <Image
        src="/card2.png"
        alt="Card 1"
        width={150}
        height={150}
        className='w-full rounded-t-lg'
        />
        </div>
        <div className='flex flex-col items-end mx-2 pb-2 '>
          <p>Lorem ipsum </p>
          <button className='bg-red-600  rounded-sm text-white px-2 py-1 -left'>CTA</button>
        </div>
        </div>
      <div className='flex flex-col border rounded-lg shadow-2xl gap-2'> 
        <div>
           <Image
        src="/card3.png"
        alt="Card 1"
        width={150}
        height={150}
        className='w-full rounded-t-lg'
        />
        </div>
        <div className='flex flex-col items-end mx-2 pb-2 '>
          <p>Lorem ipsum </p>
          <button className='bg-red-600  rounded-sm text-white px-2 py-1 -left'>CTA</button>
        </div>
        </div>
    </section>
  )
}
