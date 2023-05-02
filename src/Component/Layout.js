import React from "react";
import {Outlet,} from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

class Layout extends React.Component{
    render(){
        return(
            <>
            <Header/>
            <Outlet/>
            <Footer/>
            </>
        )
    }
}
export default Layout;