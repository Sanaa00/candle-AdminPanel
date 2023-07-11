import React from 'react'
type propsTypes = {
     icon: React.ReactNode,
     name: string,
     number?:number|undefined
}
function CategoryBox({icon,name}:propsTypes) {
  return (
 <div className="flex items-center py-2 px-8  h-fit bg-customPurple bg-opacity-80 rounded-lg my-2 ml-2 shadow-sm">
       {icon}
        <div className="flex flex-col ml-2">
          <p className='font-bold text-gray-50 '> {name}</p>
         </div>
        <div>
        </div>
      </div> 
  )
}

export default CategoryBox
