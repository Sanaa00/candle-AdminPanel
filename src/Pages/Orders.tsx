import { useState } from "react"
import { useChangeStateMutation, useGetOrdersQuery } from "../features/Api/Order"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import ReactPaginate from "react-paginate"
// import { orderMenuItem } from "./pages.utility"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
} from "@mui/material";
import DropDown from "../Component/DropDown";

function Orders() {
  const [page,setPage]=useState<number>(1)
  const { data: orders } = useGetOrdersQuery({ page })
  console.log(orders)
 
  const [changeState] = useChangeStateMutation()
 const orderMenuItem = [
          {
               id: 1,
               name: "View Details",
          },
          {
               id: 2,
               name: "Pending",
              //  onclick:()=>changestateHandler("Pending")
          },
          {
               id: 3,
               name: "Completed",
              //  onclick:()=>changestateHandler("Completed")
          }
     ]

  return (
  <div className="px-8 pt-5">
      <p className="font-semibold text-gray-800 text-xl">Orders</p>
         <TableContainer>
      <Table stickyHeader aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>name</TableCell>
            <TableCell>address</TableCell>
            <TableCell>total price</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {orders?.data?.Orders?.map((row) => (
                 <TableRow key={row?._id}>
              <TableCell>{row?.user?.firstName}</TableCell>
              <TableCell>{row?.address[0]?.city}</TableCell>
              <TableCell>{row?.totalprice}</TableCell>
                <TableCell>{row?.status}</TableCell>
                <TableCell>
                  <DropDown OrderMenu={orderMenuItem} id={row?._id} />
                  {console.log(row?._id)}
            
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
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
          pageCount={orders && orders?.data?.Orders?.length / 6 }
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

export default Orders
