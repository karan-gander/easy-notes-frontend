import { forwardRef } from "react"

const Select = ({options,values,label,SelectedBranch,...props},ref)=>{
  // console.log(SelectedBranch)
  // console.warn("opton",options)
    // console.log(values)
   

    return(
        <>
         <div className="w-full p-5 min-w-60">
      <label
        htmlFor="small"
        className="block font-popins mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <select
        id="small"
        onClick={(event)=>SelectedBranch(event.target.value)}
        ref={ref} // Pass the ref here
        className="block font-popins w-full px-4 py-3 text-base text-primary border rounded-md bg-white focus:ring-primary focus:border-primary"
        
        {...props}
        
      >
        {options.map((option, i) => (


          <option value={values[i]} className="bg-white w-full p-2" key={i}  >
            {option} {values[i]}
          </option>
        ))}
      </select>
    </div>
        </>
    )
}

export default forwardRef(Select)