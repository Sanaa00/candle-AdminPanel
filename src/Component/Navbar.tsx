import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Search from "./Search";
import Button from "./products/Button";
import { useDispatch, useSelector } from "react-redux";
import { userDataProps } from "../features/Api/products.types";
import { Logout } from "../features/userSlice";
import { Navigate } from "react-router-dom";
  interface RootState {
  user: userDataProps;
}
function Navbar() {
  const { user } = useSelector((state:RootState) => state.user)
  const dispatch = useDispatch()
  if(user===null) return <Navigate replace to="/"/> 
  return (
    <div className=" flex justify-between items-center px-8 py-5 bg-gray-50 shadow-sm"> 
     <Search/>
     <div className="flex items-center text-purple-400">
     <div className="m-4">
          <NotificationsNoneOutlinedIcon className="text-customPurple" />
        </div> 
        <Button text="Logout" onclick={() => {
          dispatch(Logout())
          console.log("logout",user)
        }} />

     </div>
    </div>
  )
}

export default Navbar
