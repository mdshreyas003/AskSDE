import { useEffect, useState } from "react";
import ProblemPage from './ProblemPage'
import Pagenation from './Pagenation'
import Category from "./Category";
import NameSearch from './NameSearch'

import {SignOut, Name} from './Auth'
const Body =()=>{
    const [orginalList, setOrginalList] = useState([])
    const [searchValue,setSearchValue] = useState("")
    const [problemList, setProblemList] = useState([])
    const [currPg, setCurrPg] = useState(1)
    const [problemPerPage, setProblemPerPage] =useState(10)
    const [categories, setCategories] = useState(["all"])
    function filterProblem (search, list){
        if(!search || search==='all')
        {
            return orginalList;
        }
        const newList = []
        list?.forEach((i)=> {
            if(i?.tags?.includes(search))
            {
                newList?.push(i)
            }
    })
    return newList;
    }
    function filterProblemName (search, list){
        const newList = []
        list?.forEach((i)=> {
            if(i?.name?.toLowerCase()?.includes(search.toLowerCase()))
            {
                newList?.push(i)
            }
    })
    return newList;
    }
    function searchName(name)
    {
        const  list =  filterProblemName(name,orginalList);
        setProblemList(list)
    }
    useEffect(()=>{
        getProblems();
    },[])
    async function getProblems()
    {
        const data = await fetch("https://asksde.onrender.com/api/problemset/")
        const json = await data?.json()
        // console.log(json.problems[0])
        setOrginalList(json?.problems)
        setProblemList(json?.problems)
        const temp = json?.problems
        const c=new Set()
        temp.forEach((i)=>{
            i?.tags?.forEach((j)=> c.add(j))
        })
        console.log(c)
        // categories=c

        setCategories([...c])

    }
    function sortCategory(c)
    {
        console.log(c)
        let list1 = filterProblem(c,orginalList);
        
        setProblemList(list1)
        setCurrPg(1)
    }

    //pagination
    function goto(pgno)
    {
        setCurrPg(pgno)
    }

    const last = currPg*problemPerPage
    const first = last - problemPerPage
    const currPgList = problemList.slice(first,last)
    const [flag, setFlag]= useState("Solved")
    
    //sort category
    

    //Global count
    const [globalCt, setGlobalCount] = useState(localStorage.total)
    //solved
    function getSolved()
    {
        if(flag === "All"){
         setProblemList(orginalList)
         setFlag("Solved")
         return}
        let solvedId=[];
        
        let f = new Set();
        
        Object.keys(localStorage)?.forEach((i)=>{
            let x = String(i)
            if(localStorage.getItem(x) === 'true')
            {
                try{
                solvedId.push(JSON.parse(i))
                }
                catch(err){
                    console.log(err)
                }
            }
        })
        
        orginalList.forEach((i)=>{
            solvedId.forEach((j)=>{
                if(i.id === j)
                {
                    f.add(i)
                }
            })
        })
        setProblemList([...f])
        setFlag("All")
    }
    return(
        <>
        <div className="w-full px-4 flex justify-between text-center shadow-lightgreen shadow-sm py-4 bg-grey">
        <Name/>
        <h1 class="bg-gradient-to-r from-blue via-lightgreen to-green mb-2 mt-0 text-5xl font-bold leading-tight text-transperent bg-clip-text ">
            Become Zero. To <span className="text-green font-extrabold">Hero</span> 🚀😎 <span>{"["+globalCt +' / '+ orginalList.length+"]"}</span>
        </h1>
        <SignOut/>
        </div>
                <div className="flex space-x-2 py-3 m-4 rounded-md  pl-52 mb-6 text-white ">
                    <button 
                      class="rounded bg-warning  p-2.5 text-xs font-medium uppercase leading-normal text-white "
                    onClick={getSolved}>{flag}</button>
            <Category categories={categories?.sort()} sortCategory={sortCategory}/>
            <NameSearch searchName={searchName} />
            <Pagenation currPg={currPg} goto={goto} problemPerPage={problemPerPage} totalProblem = {problemList.length} />
            
            </div>
            {/* <div className="text-center">Current Page: {currPg}</div> */}
            <ProblemPage  problemList={currPgList} setGlobalCount={setGlobalCount} />
            <Pagenation currPg={currPg} goto={goto} problemPerPage={problemPerPage} totalProblem = {problemList.length} />
        </>
    )
}
export default Body;