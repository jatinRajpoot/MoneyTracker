import Link from 'next/link'
import React from 'react'
const button = () => {
  return (
    <Link href={"/formsteps"}>
    <button className="fixed bottom-4 right-4 bg-black text-white rounded-full h-12 w-12 flex items-center justify-center text-2xl focus:outline-none
      ">
        +
    </button>
  </Link>)
    
}

export default button