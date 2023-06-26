import { useState } from "react";

const ProblemCard = (props)=>{
    const [status, setStat] = useState((localStorage?.getItem(props.problem.id)))
    function mark()
    {
        let t = (localStorage.getItem(props.problem.id));
        let tt = localStorage.getItem('total')
        if(tt===null)
        {
            localStorage.setItem('total',JSON.stringify(0))
        }
        console.log(t)
        if(t===null || t==="false")
        {
            localStorage.setItem(props.problem.id,(true))
            
            localStorage.total =  JSON.parse(tt)+1
            setStat("true")
        }
        else
        {
            
            localStorage.setItem(props.problem.id, (false));
            localStorage.total =  JSON.parse(tt)-1
            setStat("false")
        }
        props.setGlobalCount(localStorage.total)
    }
    // console.log(localStorage?.getItem(props.problem.id))
    return(
        <>
            <div className="bg-grey px-8 flex justify-between py-2.5 text-white rounded-lg mb-6">
                <div>
                <a href={props.problem.link} rel="noreferrer"  target={"_blank"} className="font-mono font-bold text-3xl cursor-pointer w-fit ">
                    {props.problem.name}
                </a>
                <div className="flex space-x-4 w-fit flex-wrap mt-2.5">
                    {props?.problem?.tags?.map((tag)=>{
                            return(<div className="bg-blue text-lg text-clip py-1 uppercase font-mono font-medium px-2 rounded-md">{tag}</div>)
                        })}
                </div>
                </div>
                <div className={status === "true" ? "p-4 border-2 w-fit h-fit mt-4 rounded-lg cursor-pointer bg-green " : "p-4 border-2 w-fit h-fit mt-4 rounded-lg cursor-pointer bg-opacity-20"} onClick={()=>mark()}>
                </div>
            </div>
        </>
    )
}
export default ProblemCard