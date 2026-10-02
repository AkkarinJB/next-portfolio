import React from 'react'
import Link from "next/link";


function Navbar() {
  return (
    <nav className="flex gap-4 border-b p-4">
        <div className="">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar