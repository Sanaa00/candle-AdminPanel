import { Avatar } from "@mui/material"
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Search from "./Search";
function Navbar() {
  return (
    <div className=" flex justify-between items-center px-8 py-5 bg-gray-50 shadow-sm">

       
     <Search/>
     <div className="flex items-center text-purple-400">
     <div className="m-4">
     <NotificationsNoneOutlinedIcon />
     </div> 

     <Avatar  alt="Remy Sharp" sizes="large" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" />

     </div>
    </div>
  )
}

export default Navbar
