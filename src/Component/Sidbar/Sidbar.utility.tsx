import { MdDashboard } from "react-icons/md";
import { BsBorderStyle } from "react-icons/bs";
import { GiCandleFlame } from "react-icons/gi";
export const sidbarName=[

{
     id:1,
     name:"Dashboard",
     url:"/",
     icon:<MdDashboard className="w-6 h-6"/>

},
{
     id:2,
     name:"Products",
     url:"products",
     icon:<GiCandleFlame className="w-6 h-6"/>
     
},
{
     id:3,
     name:"Orders",
     url:"orders",
     icon:<BsBorderStyle className="w-6 h-6"/>
     
}
]