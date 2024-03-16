import React from 'react'
import Link from 'next/link'
export const transactions = () => {
  return (
    <>
    <div className="bg-white shadow-md rounded-lg p-4 max-w-sm">
        <Link href={"/transactions"}>
  <h3 className="text-lg font-semibold text-gray-900 mb-4">Previous Transactions</h3>
    </Link>
  <div className="mb-3">
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <div className="p-2 mr-3 bg-gray-200 rounded-full">
          {/* <!-- Insert icon SVG here --> */}
        </div>
        <div>
          <p className="font-semibold text-gray-800">Rental Income</p>
          <p className="text-sm text-gray-500">14 July 2021</p>
        </div>
      </div>
      <div className="text-green-500 font-semibold">
        +$6,500.00
      </div>
    </div>
  </div>

  <div className='mb-3'>
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <div className="p-2 mr-3 bg-gray-200 rounded-full">
          {/* <!-- Insert icon SVG here --> */}
        </div>
        <div>
          <p className="font-semibold text-gray-800">Grocery Shopping</p>
          <p className="text-sm text-gray-500">22 July 2021</p>
        </div>
      </div>
      <div className="text-red-500 font-semibold">
        -$300.49
      </div>
    </div>
  </div>

  <div className='mb-3'>
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <div className="p-2 mr-3 bg-gray-200 rounded-full">
          {/* <!-- Insert icon SVG here --> */}
        </div>
        <div>
          <p className="font-semibold text-gray-800">Grocery Shopping</p>
          <p className="text-sm text-gray-500">22 July 2021</p>
        </div>
      </div>
      <div className="text-red-500 font-semibold">
        -$300.49
      </div>
    </div>
  </div>


  <div className='mb-3'>
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <div className="p-2 mr-3 bg-gray-200 rounded-full">
          {/* <!-- Insert icon SVG here --> */}
        </div>
        <div>
          <p className="font-semibold text-gray-800">Grocery Shopping</p>
          <p className="text-sm text-gray-500">22 July 2021</p>
        </div>
      </div>
      <div className="text-red-500 font-semibold">
        -$300.49
      </div>
    </div>
  </div>

  {/* <!-- Repeat the transaction block for more entries --> */}
</div>

    </>
  )
}

export default transactions