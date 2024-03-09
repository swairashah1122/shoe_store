import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import ViewItems from './components/ViewItems/ViewItems';
import NotFound from './components/NotFound';
const App=()=>{
  return <div className='appcontainer'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Products' element={<Products />} />
        <Route path="/products/:id" element={<ViewItems />} />      
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
}
export default App;