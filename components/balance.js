import React from 'react'

export const balance = () => {
  return (
    <>
    <div className=" p-5 rounded-lg shadow-md flex justify-between ">
        <div className="greetings">
          <h1 className="text-2xl font-semibold text-gray-800">Welcome</h1>
          <p className="text-xl text-gray-700 mt-1">Jatin</p>
        </div>
        <div className="balance">
        <p className="text-lg font-bold text-gray-900">Balance</p>
        <div className=" text-xl text-gray-700 mt-1">
            ₹5,000
        </div>
        </div>
      </div>
    </>
  )
}


export default balance