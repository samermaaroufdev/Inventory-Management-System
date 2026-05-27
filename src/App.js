import React from "react";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './components/Home';
import Products from './pages/Products';
import Table from './components/Table';
import Navbar from './components/Navbar';

const App=()=>{
  return (
    <div>
      <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Products' element={<Products/>}/>
      <Route path='/AddProduct' element={<AddProduct/>}/>
      <Route path='/ProductDetails1' element={<Table/>}/>
      <Route path='/ProductDetails2' element={<Table/>}/>
      <Route path='/ProductDetails3' element={<Table/>}/>
      <Route path='/ProductDetails4' element={<Table/>}/>
      <Route path='/ProductDetails5' element={<Table/>}/>
      <Route path='/ProductDetails6' element={<Table/>}/>
      <Route path='/ProductDetails7' element={<Table/>}/>
      <Route path='/ProductDetails8' element={<Table/>}/>
      <Route path='/ProductDetails9' element={<Table/>}/>
      <Route path='/ProductDetails10' element={<Table/>}/>
      
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;