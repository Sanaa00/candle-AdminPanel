import Paragraph from "../Component/products/Paragraph"
import ReactPaginate from "react-paginate";
import SalesInfo from "../Component/products/SalesInfo"
import {  useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import {  useGetProductsQuery } from "../features/Api/Products";
import { useSelector } from "react-redux";
import DropDown from "../Component/DropDown";
 
function Products() {

 const [page, setPage]= useState<number>(1);
 const  {search}  = useSelector((state) => state.search)
  const { data: products, isError, isLoading, error } = useGetProductsQuery({ search, page })
  
  const productsMenuItem = [
    
    {
      id: 1,
    name:"View Details"}
  ]
 
  return (
    <div className="px-8 pt-5">
     <p className="font-semibold text-gray-800 text-xl">  All Products</p>
     <div className="grid grid-cols-3 gap-5 justify-between items-center mt-5">
       {
        products?.data?.products?.map((product)=>{ 
          return <div key={product._id} className=" bg-gray-50 p-4 m-2 rounded-lg shadow-md" >
    
      <div className="flex flex-col "> 
              <div className="flex justify-between">
                <div className="flex "><img src={product.images[0]} alt="products" className="w-16 h-16 rounded-lg" />

                <div className="flex flex-col justify-between ml-4">     
                  <Paragraph productName={product.productName}/>
                  <Paragraph price={product.price}/>
                </div></div>
                
                <div className="bg-white flex  w-8 h-8 rounded-lg pb-2 justify-center items-center shadow-sm">
                  <DropDown productMenu={productsMenuItem} id={product?._id} /></div>
              </div>
    
       <div className="my-2">
        <p className="font-semibold text-gray-800">Summry</p>
        <p className="text-sm text-gray-800 ">{product.description.slice(0,80)}...</p>
       </div>
     {( product.amount && product.sell)&& <SalesInfo amount={product.amount} sell={product.sell}/>}

      </div>
 

     </div>
     
     })}
     </div>
    
      <ReactPaginate
          breakLabel="..."
            forcePage={page - 1}
          // onPageChange={handlePageClick}
          onPageChange={(e) => {
            setPage(e.selected + 1);
          }}
          pageRangeDisplayed={3}
          // pageCount={page}
          marginPagesDisplayed={0}
          pageCount={products && products?.data?.result / 8}
          className="flex items-center my-5 mx-2 "
          previousLabel={false}
          nextClassName="text-gray-700 px-5 py-2 border-gray-100 border-2 rounded-lg"
          nextLabel={<HiOutlineArrowNarrowRight className="w-6 h-6"/>}
          pageClassName="text-gray-800 px-4 py-2 mx-2 "
          activeClassName="text-gray-800 rounded-lg bg-customPurple py-2 px-4 shadow-sm"
          renderOnZeroPageCount={null}
        />
    
    </div>
  )
}

export default Products
