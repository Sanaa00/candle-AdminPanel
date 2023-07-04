import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchHandler } from '../features/searchSlice'
// import { RiSearch2Line } from "react-icons/ri";
// type serachProps={
//      search:string,
//      setSearch:React.Dispatch<React.SetStateAction<string>>,
//     //  onChandeHandlerProps:(event:React.ChangeEvent<HTMLInputElement>)=>void
// }


function Search() {
  const  {search}  = useSelector((state) => state.search)
  const dispatch=useDispatch()
    //  const [search,setSearch]=useState<string>()
     const onChandeHandler=(event: React.ChangeEvent<HTMLInputElement>)=>{
        dispatch(searchHandler(event.target.value))  
          // console.log(event.target.value)
        
  }  
  console.log(search)
  return (
    <div >
      <input onChange={(event) => onChandeHandler(event)}
        className='p-2 border-gray-100 focus:border-purple-400 border-2 outline-none rounded-lg w-96'
        placeholder={"Search"} />
    </div>
  )
}

export default Search
