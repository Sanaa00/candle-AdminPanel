import { Route, Routes } from "react-router-dom"
import Sidbar from './Component/Sidbar/Sidbar';
import Dashboard from "./Pages/Dashboard";
import Orders from "./Pages/Orders";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
import OrderDetails from "./Pages/OrderDetails";
import Login from "./Pages/Login";

function App() {
  return (
<>


      <Routes>
        <Route path="/" Component={Login} element={ <Login/>} />
        <Route path="/adminpanel" Component={Sidbar}  element={<Sidbar/>}> 
          <Route path="/adminpanel/dashboard" Component={Dashboard}  element={<Dashboard/>}/>
          <Route path="/adminpanel/orders" Component={Orders} element={<Orders/>} />
          <Route path="/adminpanel/orders/:_id" Component={OrderDetails} element={<OrderDetails/>} />
          <Route path="/adminpanel/products" Component={Products} element={<Products />} />
         <Route path="/adminpanel/products/:_id" Component={ProductDetails}  element={<ProductDetails/>}/>
        </Route>
       
      </Routes>
</>




  )
}

export default App
