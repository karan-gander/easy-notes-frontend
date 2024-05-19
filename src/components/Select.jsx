import { forwardRef } from "react"

const Select = ({options,values,label,...props},ref)=>{
    
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
        ref={ref} // Pass the ref here
        className="block font-popins w-full px-4 py-3 text-base text-primary border rounded-md bg-white focus:ring-primary focus:border-primary"
        {...props} // Spread other props
      >
        {options.map((option, i) => (
          <option className="bg-white w-full p-2" key={i} value={values[i-1]} >
            {option}
          </option>
        ))}
      </select>
    </div>
        </>
    )
}

export default forwardRef(Select)