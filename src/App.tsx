import { Route, Routes } from "react-router-dom"
import Sidbar from './Component/Sidbar/Sidbar';
import Dashboard from "./Pages/Dashboard";
import Orders from "./Pages/Orders";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
import OrderDetails from "./Pages/OrderDetails";

function App() {
  return (
<>


  <Routes>
        <Route path="/" Component={Sidbar}  element={<Sidbar/>}> 
          <Route path="/" Component={Dashboard}  element={<Dashboard/>}/>
          <Route path="/orders" Component={Orders} element={<Orders/>} />
          <Route path="/orders/:_id" Component={OrderDetails} element={<OrderDetails/>} />
          <Route path="/products" Component={Products} element={<Products />} />
         <Route path="/products/:_id" Component={ProductDetails}  element={<ProductDetails/>}/>
          
        </Route>
       
      </Routes>
</>




  )
}

export default App
