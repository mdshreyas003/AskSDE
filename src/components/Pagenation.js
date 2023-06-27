import { useState } from "react";

function Pagenation({problemPerPage, totalProblem, goto, currPg}) {
    const pgnos =[]
    let finalPgno=[]
    const reqPg = Math.ceil(totalProblem/problemPerPage);
    const [start, setStart]= useState(1)
    const [end, setEnd] = useState(10)
    for(let i=1; i<=reqPg ;i++)
    {
        pgnos.push(i)
    }
    if(reqPg <=10){
        finalPgno = pgnos
    }
    else
    {
        finalPgno = pgnos.slice(start-1,end)
    }
      return (
    <div className=" p-4 space-x-4 flex justify-center text-center ">
        <button onClick={()=>{
            if(start >10)
            {
                setStart(start-10);
                setEnd(end-10);
            }
        }}>
            Prev
        </button>
        {finalPgno.map(no=>(
                <a className={ (no===currPg)? 'bg-green text-black p-2 rounded-lg hover:bg-lightgreen' : "bg-white text-black p-2 rounded-lg hover:bg-lightgreen" } href="#" onClick={(e)=>{e.preventDefault(); goto(no)}}>
                    {no}
                </a>
            ))}
        <button onClick={()=>{
            if(end <= reqPg)
            {
                setStart(start+10);
                setEnd(end+10);
            }
        }}>
            Next
        </button>
    </div>
  )
}

export default Pagenation