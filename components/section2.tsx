import Image from "next/image"
export default function Section2() {
  return (
    <div className="h-screen m-6">
      <h1> A PROPOS</h1>
      <div className="flex max-sm:flex-col gap-2">
      <Image
        src="/image1.png"
        alt="Image 1"
        width={350}
        height={350} />
        <div >
          <h2>A propos</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
        </div>
      </div>
    </div>
  )
}
