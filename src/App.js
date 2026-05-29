import React from "react";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import AddProduct from './pages/AddProduct'
import Navbar  from "./components/Navbar";
import ProductDetails1 from './pages/ProductDetails1'
import ProductDetails2 from './pages/ProductDetails2'
import ProductDetails3 from './pages/ProductDetails3'
import ProductDetails4 from './pages/ProductDetails4'
import ProductDetails5 from './pages/ProductDetails5'
import ProductDetails6 from './pages/ProductDetails6'
import ProductDetails7 from './pages/ProductDetails7'
import ProductDetails8 from './pages/ProductDetails8'
import ProductDetails9 from './pages/ProductDetails9'
import ProductDetails10 from './pages/ProductDetails10'

const App=()=>{
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Products' element={<Products/>}/>
      <Route path='/AddProduct/' element={<AddProduct/>}/>
      <Route path='/ProductDetails1' element={<ProductDetails1/>}/>
      <Route path='/ProductDetails2' element={<ProductDetails2/>}/>
      <Route path='/ProductDetails3' element={<ProductDetails3/>}/>
      <Route path='/ProductDetails4' element={<ProductDetails4/>}/>
      <Route path='/ProductDetails5' element={<ProductDetails5/>}/>
      <Route path='/ProductDetails6' element={<ProductDetails6/>}/>
      <Route path='/ProductDetails7' element={<ProductDetails7/>}/>
      <Route path='/ProductDetails8' element={<ProductDetails8/>}/>
      <Route path='/ProductDetails9' element={<ProductDetails9/>}/>
      <Route path='/ProductDetails10' element={<ProductDetails10/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;