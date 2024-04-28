

const Button = ({children,customClass}) => {
  return (
    <button
    type="button"
    className={`rounded-md  px-8 py-3 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${customClass}`}
  >
   {children}
  </button>
  )
}

export default Button