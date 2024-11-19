import './App.css';
import { BrowserRouter ,Route, Routes } from 'react-router-dom';
import Signup from "./auth/signUp"
import Login from "./auth/Login"
import ForgotPassword from './auth/forgetPassword';
import AddProduct from './product/AddProduct';
import UpdateProduct from './product/updateProduct';
import GetProducts from './product/getProduct';
import GetInventory from './inventory/getInventory';
import GetCheckoutData from './checkout/getCheckout';
import CreateCheckout from './checkout/createCheckout';
import GetInvoice from './invoice/getInvoice';
import CreateInvoice from './invoice/createInvoice';
import Dashboard from './Dashboard';
import CreateInventory from './inventory/postInventory';


function App() {
  

  return (
   <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Dashboard/>}/>
      <Route path="/products" element={<GetProducts/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/addproduct" element={<AddProduct/>} />
        <Route path="/update/:id" element={<UpdateProduct/>} />
        <Route path="/GET/inventory" element={<GetInventory/>} />
        <Route path="/POST/inventory" element={<CreateInventory/>} />
        <Route path="/GET/checkout" element={<GetCheckoutData/>} />
        <Route path="/POST/checkout" element={<CreateCheckout/>} />
        <Route path="/GET/invoice" element={<GetInvoice/>} />
        <Route path="/POST/invoice" element={<CreateInvoice/>} />
      </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
