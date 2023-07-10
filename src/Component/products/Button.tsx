import { buttonProductProps } from '../../features/Api/products.types'

function Button({text,onclick,type}:buttonProductProps) {
  return (
    <button onClick={onclick}
      type={type}
      className={`${text === "Delete" ? "bg-red-400 text-gray-50" : "bg-customPurple text-gray-50"}  
      +  hover:bg-opacity-80 rounded-lg w-full p-2 font-semibold shadow hover:shadow duration-500 hover:duration-500"
    `}>
      {text}
    </button>
  )
}

export default Button
