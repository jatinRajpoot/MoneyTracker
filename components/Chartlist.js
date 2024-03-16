import React from 'react'

export const Chartlist = () => {
  return (
    <>

<div class="grid gap-4 md:grid-cols-2">
  {/* <!-- Want Card --> */}
  <div class="bg-white rounded-lg shadow p-4 flex items-start space-x-4">
    <span class="text-blue-500 bg-blue-100 rounded-full p-2">
      {/* <!-- Add your icon for "Want" here --> */}
    </span>
    <div>
      <h3 class="text-lg font-semibold text-gray-800">Want</h3>
      <p class="text-2xl font-bold text-gray-900">&#8377;1,400</p>
      <p class="text-gray-500">Mauris hendrerit mollis bibendum quisque.</p>
    </div>
  </div>

  {/* <!-- Need Card --> */}
  <div class="bg-white rounded-lg shadow p-4 flex items-start space-x-4">
    <span class="text-green-500 bg-green-100 rounded-full p-2">
      {/* <!-- Add your icon for "Need" here --> */}
    </span>
    <div>
      <h3 class="text-lg font-semibold text-gray-800">Need</h3>
      <p class="text-2xl font-bold text-gray-900">&#8377;2,700</p>
      <p class="text-gray-500">Ut pulvinar arcu lacus a sit amet posuere.</p>
    </div>
  </div>

  {/* <!-- Invest Card --> */}
  <div class="bg-white rounded-lg shadow p-4 flex items-start space-x-4">
    <span class="text-cyan-500 bg-cyan-100 rounded-full p-2">
      {/* <!-- Add your icon for "Invest" here --> */}
    </span>
    <div>
      <h3 class="text-lg font-semibold text-gray-800">Invest</h3>
      <p class="text-2xl font-bold text-gray-900">&#8377;500</p>
      <p class="text-gray-500">Maecenas quis purus at metus posuere dapib.</p>
    </div>
  </div>

  {/* <!-- Waste Card --> */}
  <div class="bg-white rounded-lg shadow p-4 flex items-start space-x-4">
    <span class="text-purple-500 bg-purple-100 rounded-full p-2">
      {/* <!-- Add your icon for "Waste" here --> */}
    </span>
    <div>
      <h3 class="text-lg font-semibold text-gray-800">Waste</h3>
      <p class="text-2xl font-bold text-gray-900">&#8377;2,100</p>
      <p class="text-gray-500">Proin sagittis imperdiet egestas aenean maxi.</p>
    </div>
  </div>
</div>

    </>
  )
}


export default Chartlist;