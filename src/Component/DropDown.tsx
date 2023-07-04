import  { useState } from 'react'
import { orderMenuItem, MenuItemProps } from '../Pages/pages.types';
import { Link } from 'react-router-dom';
function DropDown({OrderMenu,productMenu,id}:MenuItemProps) {
     
  const [isActive, setActive] = useState<boolean>(false);
  const [setColor] = useState<string>("");
  const handleDropdownClick = () => setActive(!isActive);
  const handleColor = () => {
    setActive(!isActive);
  };
  return (
    <div>
       <div>
         <div className="relative inline-block ">
          <span>
            <button
              onClick={handleDropdownClick}
              className="inline-flex justify-center w-full  px-4 py-1 text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none transition ease-in-out  duration-150"
            >
             ...
            </button>
          </span>
      
         <div
          className={`${
            isActive ? "block" : "hidden"
          } +origin-top-left absolute left-3 top-3 mt-2 z-50`}
        >
          <div className="rounded-md bg-white text-gray-600 shadow-lg flex flex-col justify-start items-start w-24">
              {(OrderMenu||productMenu)?.map((item) => {
                   return (
                        item.name === "View Details" ? <Link
                                    className={`block py-1 pl-3 w-full text-start rounded-sm text-sm hover:bg-gray-100`}
                             key={item.id} to={OrderMenu?`/orders/${id}`:`/products/${id}`}>{item.name}</Link> :
                  <button
                    key={item.id}
                    onClick={item.onclick}
                    className={`block py-1 pl-3 w-full text-start rounded-sm text-sm hover:bg-gray-100`}
                     >{ item.name}</button>
                );
              })}
                     <button
                     onClick={()=>handleDropdownClick()}
                     className={`border-t-2 py-1 border-gray-100 block pl-3 text-start w-full rounded-sm text-sm  hover:bg-gray-100 `}
                     >cancel</button>                
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default DropDown
