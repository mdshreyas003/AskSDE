import React from 'react'

function Solved({getSolved,flag}) {
  return (
    <div>
        <button 
                      class="rounded bg-warning p-1 text-xs font-medium uppercase leading-normal text-white "
                    onClick={getSolved}>{flag}</button>
    </div>
  )
}

export default Solved