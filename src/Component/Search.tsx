import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchHandler } from '../features/searchSlice'
function Search() {
  const  {search}  = useSelector((state) => state.search)
  const dispatch=useDispatch()
     const onChandeHandler=(event: React.ChangeEvent<HTMLInputElement>)=>{
        dispatch(searchHandler(event.target.value))  
        
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
