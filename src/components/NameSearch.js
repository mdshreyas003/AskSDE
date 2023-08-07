import React, { useState } from 'react'

function NameSearch({searchName}) {
    const [val, setVal] = useState('')
  return (
    <div className=''>
        <input className='p-2.5 text-white rounded-r-none border-r-0 bg-grey border rounded-md shadow-sm outline-none focus:border-indigo-600' value={val} placeholder='Search Problem' onChange={(e)=> setVal(e.target.value)} />
        <button className='bg-blue p-2.5 rounded-l-none rounded-md border-l-0 border' onClick={()=>{searchName(val)}} >Search</button>
    </div>
  )
}

export default NameSearch