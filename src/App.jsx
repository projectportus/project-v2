import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '@/pages/Home'
import Shop from '@/pages/Shop';
import SingleProduct from './pages/SingleProduct';
import Cart from './components/sections/CartPage/Cart';
import Checkout from "./components/sections/Checkout/Checkout";
import ContactUs from "./components/sections/ContactUs/ContactUs";
import './App.css'



function App() {

 

  return (
    <>
      <Router basename="/project-v2">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs/>} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/single-product" element={<SingleProduct />} />
          <Route path="/shopping-cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
