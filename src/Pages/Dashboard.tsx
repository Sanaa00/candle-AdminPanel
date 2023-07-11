
import { AiOutlineUser } from "react-icons/ai"
import { useGetAllUserQuery } from "../features/Api/User"
import { BsBorderStyle } from "react-icons/bs";
import { useGetOrdersQuery } from "../features/Api/Order";
import { GiCandleFlame } from "react-icons/gi";
import { PiFireSimpleBold, PiFlowerLight } from "react-icons/pi";
import { GiCandles,GiDelicatePerfume } from "react-icons/gi";
import { searchProps } from "../features/Api/products.types";

import Box from "../Component/dashboard/Box";
import { useGetProductsQuery } from "../features/Api/Products";
import { useSelector } from "react-redux";
import CategoryBox from "../Component/dashboard/CategoryBox";
function Dashboard() {
  const { data: allUsers } = useGetAllUserQuery(undefined)
  const page = 1
  const { data: allOrders } = useGetOrdersQuery({ page })
  // console.log(allOrders)
  const { search } = useSelector((state) => state.search)
 
  const { data: allProducts } = useGetProductsQuery({ search, page })
 console.log(allProducts)

  const dashboard = [
    {
      id: 1,
      icon: <AiOutlineUser className="w-14 h-14 p-3 mr-2 rounded-full bg-white border-gray-100 border-2 text-customPurple" />,
      name: "Users",
      number:allUsers?.results
      
    },
     {
      id: 2,
      icon:  <BsBorderStyle className="w-14 h-14 p-3 mr-2 rounded-full bg-white border-gray-100 border-2 text-customPurple" />,
      name: "Orders",
      number:allOrders?.data?.result
      
    },
      {
      id: 3,
      icon:   <GiCandleFlame className="w-14 h-14 p-3 mr-2 rounded-full bg-white border-gray-100 border-2 text-customPurple" />,
      name: "Sell",
      number:80
    },
       {
      id: 4,
      icon:   <GiCandleFlame className="w-14 h-14 p-3 mr-2 rounded-full bg-white border-gray-100 border-2 text-customPurple" />,
      name: "Products",
      number:allProducts?.data?.result
    }
  ]
  const category = [
    {
      id: 1,
      icon: <PiFireSimpleBold className="w-10 h-10 p-1 mx-2 rounded-full bg-white border-gray-100 border-2 text-customPurple" />,
      name: "Simple",  
    },
     {
      id: 2,
      icon: <PiFlowerLight className="w-10 h-10 p-1 mx-2  rounded-full bg-white border-gray-100 border-2 text-customPurple" />,
      name: "Flower",
    },
      {
      id: 3,
      icon: <GiCandles className="w-10 h-10 p-1 mx-2  rounded-full bg-white border-gray-100 border-2 text-customPurple" />,
      name: "Collection",
    },
         {
      id: 4,
      icon: <GiDelicatePerfume className="w-10 h-10 p-1 mx-2  rounded-full bg-white border-gray-100 border-2 text-customPurple" />,
      name: "Scently",
    }
  ]
  return (<div className=" px-8 pt-5  flex flex-col">
    <p className="font-semibold text-gray-800 pl-2">Category</p>
  
    <div className="grid grid-cols-4 ">
  
   {category.map((item) => {
        //  <p className="font-semibold text-gray-800 text-xl">Category</p>
        return <CategoryBox key={item.id} name={item.name} icon={item.icon}  />
        })}
      {dashboard.map((item) => {
        return <Box key={item.id} name={item.name} icon={item.icon} number={item.number} />
      })}
      
      {/* <p className="font-semibold text-gray-800 text-xl">Category</p> */}
      {/* <div>
         <p className="font-semibold text-gray-800 text-xl">Category</p> */}
     
    {/* </div> */}
     

      
    </div></div>
  
  )
}

export default Dashboard
