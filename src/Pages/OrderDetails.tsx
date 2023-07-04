import { useParams } from "react-router-dom"


function OrderDetails() {
    const{ _id} = useParams()
  return (
    <div>
      order deatails 
    </div>
  )
}

export default OrderDetails
