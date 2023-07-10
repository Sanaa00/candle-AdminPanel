
import { NavLink, Outlet } from 'react-router-dom'
import { sidbarName } from './Sidbar.utility'
import Navbar from '../Navbar'
import { GiCandleFlame } from "react-icons/gi";
function SidbaR() {
  return (
    <div className='grid grid-cols-5 '>
      
      <div className='flex flex-col col-start-1 col-end-2  bg-gray-50 h-screen pt-5 border-r-2 border-gray-100 fixed w-1/5'> 
      <div className='flex justify-center items-center'> 
      <GiCandleFlame className="w-16 h-16 my-2 text-purple-400"/>
      </div>
       {sidbarName.map((name)=>{
       return <NavLink to={name.url} key={name.id} className={
        ({isActive})=>isActive?" bg-customPurple p-4 font-semibold text-gray-50 flex  items-center":" font-semibold text-gray-800 p-4 flex items-center" }>
           <span className='pr-2'>{name.icon}</span> {name.name}
         </NavLink>
       })}
       </div>
        
    <div className='w-full h-full col-start-2 col-end-6 flex flex-col '>
      <Navbar/>
      <Outlet/>
      </div>
      
    </div>
  )
}

export default SidbaR
