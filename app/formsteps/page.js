"use client"
import React from 'react'
import Link from 'next/link'
import Signinpage from '@/components/auth/signinpage'

import { useSession, signIn, signOut } from "next-auth/react"

// export default function Component() {
//   const { data: session } = useSession()
//   console.log(session)
//   if(session) {
//     return <>
//       Signed in as {session.user.email} <br/>
//       <button onClick={() => signOut()}>Sign out</button>
//     </>
//   }
//   return <>
//     Not signed in <br/>
//     <button onClick={() => signIn("github")}>Sign in</button>
//   </>
// }

const page = () => {
  const { data: session } = useSession()
  console.log(session)
  if(session) {
    return <>
            <div className="step1">
              <Link href={"/formsteps/spend"}><li className="link">spend</li></Link>
              <Link href={"/formsteps/income/"}><li className="link">Income</li></Link>
              <Link href={"/formsteps/invest"}><li className="link">invest</li></Link>
              <Link href={"/formsteps/lend"}><li className="link">lend</li></Link>
              <Link href={"/formsteps/borrow"}><li className="link">borrow</li></Link>
              <Link href={"/formsteps/takeback"}><li className="link">TakeBack</li></Link>
              <Link href={"/formsteps/return"}><li className="link">Return</li></Link>
        
          </div>
          </>
    
  }

  return (
    <Signinpage></Signinpage>
  )
}

export default page