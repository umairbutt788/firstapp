import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Faq from "./Component/Faq";
import About from "./Component/About";
import Products from "./Component/Products";
import Contact from "./Component/Contact"
import Layout from "./Component/Layout";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import Model from "./Component/Model"


class App extends React.Component{
  render(){
    return(
      <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Model" element={<Model />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Sign-up" element={<Signup/>}/>
          
        </Route>
      </Routes>
    </BrowserRouter>
      </>
    )
  }

}

export default App;