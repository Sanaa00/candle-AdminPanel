import {useState} from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { useDeleteProductMutation,  useGetProductByIdQuery } from '../features/Api/Products'
import Button from '../Component/products/Button'
import ProductUpdateForm from '../Component/products/ProductUpdateForm'
import DiscountForm from '../Component/products/DiscountForm'
function ProductDetails() {
 
  const { _id } = useParams()
  const id=_id
  const { data: singleProduct } = useGetProductByIdQuery(_id)
  console.log(singleProduct)

  const [delele,setDelete]=useState<boolean>(false)
  const [deleteProduct]=useDeleteProductMutation()
  const [update, setUpdate] = useState<boolean>(false)
  const [discount, setDiscount] = useState<boolean>(false)
  const onUpdateHandler = () => {
    setUpdate(!update)
  }
  const onDiscountHandler = () => {
    setDiscount(!discount)
    // discounttoProduct(singleProduct)
  }

  const onDeleteHandler = () => {
     setDelete(true)
     deleteProduct(id)
     console.log(id)
  }

if(delele===true)return(<Navigate to="/adminpanel/products" replace />)

  return (
    <div className="px-8 pt-5 text-gray-800 w-full">
      <p className="font-semibold text-gray-800 text-xl">Product Details</p>
      <div className='grid grid-cols-5 justify-start items-start w-full'>
        <div className='grid col-start-1 col-end-4 items-start justify-start w-full'>

          <p className='font-semibold text-gray-800 mt-5'>{singleProduct?.data?.productName}</p>
          <p className='mt-2 rounded-xl bg-gray-50 flex items-center justify-center p-2 w-fit font-semibold'>{singleProduct?.data?.categoryId?.category}</p>
          <p className='mt-5 mr-5'>{singleProduct?.data?.description}</p>
          <div className='mt-5 grid grid-cols-2 justify-between items-center'>
            <div className='flex items-center  font-semibold w-1/2'>price
              <p className='ml-5 text-green-700'>{singleProduct?.data?.price}$</p>
            </div>
            <div className='flex items-center font-semibold w-1/2'>Discount
              <p className='ml-5  text-green-700'>{singleProduct?.data?.discount === 0 ? "No discount" : singleProduct?.data?.discount+"$"}</p>
            </div>
          </div>
          <div className='mt-10 w-full'>
            <p className='font-semibold text-gray-800 mt-5 '>Reviews</p>
            <div className='w-full'>{singleProduct?.data.review?.length!==0?singleProduct?.data?.review?.slice(0,5).map((review) => {
              return <div key={review?._id} className='w-full bg-gray-50 p-4 mt-2 rounded-lg mr-5  hover:shadow hover-duration-500 duration-500'>{ review?.message}</div>
            }) :<p className='bg-gray-50 p-4 mt-2 rounded-lg mr-5  hover:shadow hover-duration-500 duration-500'>No review yet</p>}</div>
          </div>
          { singleProduct?.data?._id &&<div className='mt-10 w-full'> {update === true ? <ProductUpdateForm id={ singleProduct?.data?._id} /> : null}</div>}
          
          <div className='mt-5 w-full'>{discount === true ? <DiscountForm data={singleProduct } />:null}</div>
         
    
        </div>
        <div className='grid col-start-4 col-end-6'>
          <img src={singleProduct?.data?.images[0]} className='w-full h-96 rounded-lg shadow-sm' />
          <div className='grid grid-cols-3 gap-2 justify-between items-center mt-5'>
            <Button text="Update" onclick={()=>onUpdateHandler()} />
            <Button text="Discount" onclick={() =>
            
           
              onDiscountHandler()} />
            <Button text="Delete" onclick={() => {
              onDeleteHandler()
             } } />
          </div>
   
        </div>
      </div>
      
     
    </div>
  )
}

export default ProductDetails
