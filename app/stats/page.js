"use client"
import React from 'react'
import DoughnutChartComponent from "@/components/graph.js"
import Chartlist from '@/components/Chartlist'
import { useSession, signIn, signOut } from "next-auth/react"

const page = () => {
  const { data: session } = useSession()
  console.log(session)
  if(session) {
          return<>
          <DoughnutChartComponent></DoughnutChartComponent>
          <Chartlist></Chartlist>
          </>
           
    }
    return <>
        Not signed in <br/>
      <button onClick={() => signIn("github")}>Sign in</button>
      </>
}

export default page