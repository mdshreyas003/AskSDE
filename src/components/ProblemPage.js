import React from 'react'
import ProblemCard from './ProblemCard'
import Shimmer from './Shimmer'
function ProblemPage({problemList, setGlobalCount}) {
  if(!problemList || problemList.length ===0 )
  {
    let a = Array(10).fill(1)
    return(
      <div className="flex-col justify-center sm:px-52  ">
        {
          a.map(()=>{return <Shimmer/>})
        }
      </div>
    )
  }
  return (
    <div className="flex-col justify-center sm:px-52  ">
        {problemList?.map((problem)=>{
            return(
                <ProblemCard setGlobalCount={setGlobalCount} problem ={problem} key={problem?.id} />
            )
        })}
    </div>
  )
}

export default ProblemPage