import React from 'react'

export const options = () => {
  return (
    <>
    <div className='p-5'>
    <p className="text-xl text-gray-700 mt-1">Easy operations</p>
    {/* <!-- Container for the horizontal scroll --> */}
<div className="flex overflow-x-auto py-2">
  {/* <!-- Child items within the scrollable flex container --> */}
  <div className="flex-none w-32 mx-2 bg-white rounded-lg shadow text-center p-4">
    <div className="text-blue-500">
    <i class="fas fa-money-bill-wave" title="Earning"></i>
    </div>
    <p className="text-gray-600 text-sm mt-2">Spend</p>
  </div>
  <div className="flex-none w-32 mx-2 bg-white rounded-lg shadow text-center p-4">
    <div className="text-blue-500">
      {/* <!-- Your icon here --> */}
    </div>
    <p className="text-gray-600 text-sm mt-2">Income</p>
  </div>
  <div className="flex-none w-32 mx-2 bg-white rounded-lg shadow text-center p-4">
    <div className="text-blue-500">
      {/* <!-- Your icon here --> */}
    </div>
    <p className="text-gray-600 text-sm mt-2">Lend</p>
  </div>
  <div className="flex-none w-32 mx-2 bg-white rounded-lg shadow text-center p-4">
    <div className="text-blue-500">
      {/* <!-- Your icon here --> */}
    </div>
    <p className="text-gray-600 text-sm mt-2">Borrow</p>
  </div>
  <div className="flex-none w-32 mx-2 bg-white rounded-lg shadow text-center p-4">
    <div className="text-blue-500">
      {/* <!-- Your icon here --> */}
    </div>
    <p className="text-gray-600 text-sm mt-2">Invest</p>
  </div>
  <div className="flex-none w-32 mx-2 bg-white rounded-lg shadow text-center p-4">
    <div className="text-blue-500">
      {/* <!-- Your icon here --> */}
    </div>
    <p className="text-gray-600 text-sm mt-2">Takeback</p>
  </div>
  {/* <!-- Repeat the above div for as many items as you want --> */}
</div>
</div>
    </>
  )
}


export default options