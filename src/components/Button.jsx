

const Button = ({children}) => {
  return (
    <button
    type="button"
    className="rounded-md bg-[#4f028f] px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#4f028f]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
  >
   {children}
  </button>
  )
}

export default Button