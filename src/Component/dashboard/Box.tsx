type propsTypes = {
     icon: React.ReactNode,
     name: string,
     number?:number|undefined
}
function Box({icon,name,number}:propsTypes) {
  return (
      <div className="flex items-center py-6 px-8  h-fit bg-gray-50 rounded-lg mt-5 ml-2 shadow-sm">
       {icon}
        <div className="flex flex-col ml-2">
          <p className='font-bold text-customPurple '>Total {name}</p>
         <p className="font-bold mt-5">{number} { name}</p>
  
        </div>
        <div>
        </div>
      </div> 
  )
}

export default Box
