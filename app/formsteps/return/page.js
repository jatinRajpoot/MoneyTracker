"use client"
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react'
import Navbar from '@/components/navbar';

import Signinpage from '@/components/auth/signinpage';

import { useSession, signIn, signOut } from "next-auth/react"

// pages/form.js or components/FormComponent.js
export default function ResponsiveForm() {

  function sleep(ms) {
    return  new Promise(resolve => setTimeout(resolve, ms));
  }
  const router = useRouter();

  const redirectToHome = () => {
    router.push('/'); // This will navigate to the homepage without reloading the page
  };

  async function postData(data) {
    const url = "http://192.168.1.3:5000/postdata";
    
  
    // Since this function now only handles fetching,
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    return response.json(); // Ensure this returns the promise
  }
  
  
  const handleSubmit = () => {
    // event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      date: formData.get('date'), // The value of the date input field
      reason: formData.get('reason'), // The value of the reason input field
      // The value of the amount input field
      amount: formData.get('amount'),
    
      
    };
    // console.log(data);
    return data
    // Implement submission logic here, such as sending the data to a server

   

  };


  const post_data = (event) => {
    event.preventDefault(); // Prevent form submission
    const data=handleSubmit()
    toast.promise(
      postData(data), // Call postData
      {
        pending: 'Adding Transcation',
        success: 'Added Succesfully',
        error: 'Operation failed'
      }
    ).then( async () => {
      await sleep(5000) 
      redirectToHome(); // Go to the home page 
    }).catch(() => {

      // closeModal();
    });
  };
  
  // Function to handle form submission

  const { data: session } = useSession()
  console.log(session)
  if(session) {
    return <>
      <Navbar></Navbar>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full mx-auto">
        <form onSubmit={post_data} className="bg-white p-8 border rounded-lg shadow-sm">
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700 text-sm font-semibold mb-2">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="reason" className="block text-gray-700 text-sm font-semibold mb-2">
              Reason
            </label>
            <input
              type="text"
              id="reason"
              name="reason"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter the reason"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="amount" className="block text-gray-700 text-sm font-semibold mb-2">
              Amount (₹)
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter the amount in rupees"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <ToastContainer/>
    </div>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }

  return <>
    <Signinpage></Signinpage>
  </>
  
}
