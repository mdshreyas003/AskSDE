import React from 'react'
import ProblemCard from './ProblemCard'
function ProblemPage({problemList, setGlobalCount}) {
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