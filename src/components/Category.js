function Category({categories, sortCategory}) {
    // const [currCategory, setCurrCategory] = useState('all')
  return (
    <div className="relative w-fit">
            <select 
            onChange={(e)=>{
                sortCategory(e.target.value)
            }}
            className="w-full p-2.5 text-white bg-grey border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                <option value='all' className="uppercase">all</option>
                {categories.map((c)=>{
                    console.log(c)
                    return(
                        <option value={c} className="uppercase">{c}</option>
                    )
                })}
            </select>
        </div>
  )
}

export default Category