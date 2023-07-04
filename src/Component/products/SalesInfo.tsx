import Paragraph from "./Paragraph"
import { BiTrendingDown,BiTrendingUp } from "react-icons/bi";
type props={
     amount:number,
     sell:number
}
function SalesInfo({amount,sell}:props) {
  return (
    <div className="px-4 py-3 bg-white rounded-lg">

<div className="flex justify-between items-center">
<Paragraph name="Sales"/> 
<div className="flex items-center">{sell>=300?<BiTrendingUp className="text-green-300 w-6 h-6"/>:<BiTrendingDown className="text-red-300 w-6 h-6"/>}<p className="pl-2 text-gray-500 font-semibold">{sell}</p></div>
 </div>
 <div className="flex justify-between items-center mt-2">
<Paragraph name="Amount"/> 
<div className="text-gray-500 font-semibold">{amount}</div>
 </div>
    </div>
  )
}

export default SalesInfo
