// components/Navbar.js
'use client'
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-10 bg-black glassy text-white">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
          <span className="font-bold text-xl">MyLogo</span>
        </div>
        <div className="flex space-x-4">
          <Link href="/home">
            <div className="hover:underline">Home</div>
          </Link>
          <Link href="/about">
            <div className="hover:underline">About</div>
          </Link>
          <Link href="/services">
            <div className="hover:underline">Services</div>
          </Link>
          <Link href="/contact">
            <div className="hover:underline">Contact</div>
          </Link>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sign Up
        </button>
      </div>
    </nav>
  );
}
