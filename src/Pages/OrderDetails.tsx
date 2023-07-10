import { useParams } from "react-router-dom"
import { AiOutlineUser } from "react-icons/ai";
import { useGetOrderByIdQuery } from "../features/Api/Order";
// import { GrDeliver } from "react-icons/gr";
import { BsSend } from "react-icons/bs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
} from "@mui/material";
function OrderDetails() {
  const  {_id } = useParams()
  // console.log(_id)
  const { data: singleOrder } = useGetOrderByIdQuery(_id)
  console.log(singleOrder)
  return (
    <div className=" pt-5 text-gray-800 flex flex-col  ">
      <div className="flex">
        <div className="flex p-4 w-fit h-fit bg-gray-50 rounded-lg mt-5 ml-5">
        <AiOutlineUser className="w-14 h-14 p-3 rounded-full bg-white border-gray-100 border-2 text-gray-800" />
        <div className="flex flex-col ml-2">
          <p className='font-bold text-gray-800 '>Customer</p>
          <div className="flex mt-3">
             
            <p className=' mr-1'>Full name:</p>
            <p className='mr-2'>{singleOrder?.data?.user?.firstName}</p>
            <p className='mr-5'>{singleOrder?.data?.user?.lastName}</p>
          </div>
          <div className="flex mt-2"><p className='mt-2 mr-1'>Email:</p> <p className='mt-2 mr-5'>{singleOrder?.data?.user?.email}</p></div>
         
        <div className="flex mt-2"><p className='mt-2 mr-1'>Phone:</p> <p className='mt-2 mr-5'>{singleOrder?.data?.address[0]?.phone}</p></div>
        </div>
        <div>
        </div>
      </div> <div className="flex p-4 w-fit h-fit bg-gray-50 rounded-lg mt-5 ml-5">
        <BsSend className="w-14 h-14 py-4  rounded-full bg-white border-gray-100 border-2 text-gray-800" />
        <div className="flex flex-col ml-2"> <p className='font-bold text-gray-800 '>Dliver To</p>
          <div className="flex mt-3">
             
            <p className=' mr-1'>city:</p>
            <p className='mr-2'>{singleOrder?.data?.address[0]?.city}</p>
            {/* <p className='mr-5'>{singleOrder?.data?.user?.lastName}</p> */}
          </div>
          <div className="flex mt-2"><p className='mt-2 mr-1'>street:</p> <p className='mt-2 mr-5'>{singleOrder?.data?.address[0]?.street}</p></div>
         
        <div className="flex mt-2"><p className='mt-2 mr-1'>Phone:</p> <p className='mt-2 mr-5'>{singleOrder?.data?.address[0]?.phone}</p></div>
        </div>
        <div>
        </div>
      </div></div>
     

     
      <div className="flex flex-col p-5 mt-10">
        <p className="font-semibold text-gray-800 text-xl">Products</p>
        <TableContainer>
      <Table stickyHeader aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Products name</TableCell>
            <TableCell>price</TableCell>
            <TableCell>category</TableCell>
            <TableCell>quantity</TableCell>
            <TableCell>Status</TableCell>
   
          </TableRow>
        </TableHead>
        <TableBody>
            {singleOrder?.data?.products?.map((row) => (
              <TableRow key={row?._id}>
              <TableCell>Simple Candle</TableCell>
              <TableCell>10$</TableCell>
              <TableCell>Simple</TableCell>
              <TableCell>{row?.quantity}</TableCell>
              <TableCell>Order</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer></div>
       
  

    </div> 
  )
}

export default OrderDetails
