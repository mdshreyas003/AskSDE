import React from 'react'

function Shimmer() {
  return (
        <div className="bg-grey px-8 flex flex-wrap justify-between py-2.5 text-white rounded-lg mb-6">
                <div>
                <div className="mx-5 ml-0 bg-white opacity-25 rounded-lg h-8 w-full">
                </div>
                <div className="flex space-x-4 w-fit flex-wrap mt-2.5">
                            <div className="bg-blue text-lg text-clip py-1 w-16 h-8 px-2 rounded-md opacity-50"></div>
                            <div className="bg-blue text-lg text-clip py-1 w-16 h-8 px-2 rounded-md opacity-50"></div>
                            <div className="bg-blue text-lg text-clip py-1 w-16 h-8 px-2 rounded-md opacity-50"></div>
                </div>
                </div>
                <div className= "p-4 border-2 w-fit h-fit mt-4 rounded-lg cursor-pointer opacity-20">
                </div>
            </div>
  )
}

export default Shimmer