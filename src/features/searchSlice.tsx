import { createSlice } from "@reduxjs/toolkit";
import { searchProps } from "./Api/products.types";

const initialState: searchProps = {
     search:""
}

const SearchSlice = createSlice({
     name:"search",
    initialState ,
     reducers: {
          searchHandler(state,action){
           state.search=action.payload
          }
     }
})

export const { searchHandler } = SearchSlice.actions
export default SearchSlice.reducer