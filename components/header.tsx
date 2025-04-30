import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function  Header() {
 return(
    <header className="bg-green-800 text white px-6 py-4 flex justify-between items -center shadow">
        <div className="text-2xl font-bold">
            <h1>PAYWISE</h1>
            <Image src="/logo" width={24}
      height={24} alt="logo" className="rounded-4xl text-yellow-300 justify items font-green-500" />
        </div>
         <nav className="hidden md:flex space-x-8 text sm font-medium">
            <Link href="#"className="hover:text-yellow-300 transition">
                Home
            </Link>,
            <Link href="#"className= "hover:text-yellow-300 transition">
                Features
            </Link>,
            <Link href="#"className= "hover:text yellow-300 transition">
                Cards
            </Link>,
            <Link href="#"className= "hover:text-yellow-300 transition">
                Contact
            </Link>,
        </nav>
                <div className="flex space-x-4">
                    <button className=" hover:text-yellow-300">
                        Log in
                    </button>
                    <button className="bg-yellow-400 text-green-900 px-4 py-2 rounded font-semibold hover:bg-yellow-300 transition">
                        Sign up
                    </button>
                </div>
        </header>
    )
}