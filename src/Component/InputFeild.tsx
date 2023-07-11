import { Field } from "formik"
import { inputFeildProps } from "../Pages/pages.types"
function InputFeild({placeholder,name,value,onChange,id,type,accept,onBlur}:inputFeildProps) {
  return (
     <Field
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      id={id}
      type={type}
      multiple
      accept={accept}
      className="w-full h-14 pl-3 border-2 rounded-lg focus:border-customPurple border-gray-400 focus:outline-none focus:border-greeen bg-gray-50 mt-2 mb-5 px-1 py-1"
    />
  )
}

export default InputFeild
