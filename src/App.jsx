import React,{Component} from "react";
import "./style.css"
import Nav from "./Burger_Component/Nav"
import Home from "./Burger_Component/Home" 
import Cards from "./Burger_Component/Cards";
import {data} from "./Burger_Component/Cards_data"
import Footer from "./Burger_Component/Footer"
export default  class App extends Component{
    render(){
        return(
            <>
            <Nav/>
            <Home/>
            <div className="cards_style" >
            {data.map(x=><Cards 
            imgSrc={x.imgSrc}
            alt={x.alt}
            heading={x.heading}
            p={x.desc}
            button={x.button}
            />)}
            </div>
            <Footer/>
            </>
        )
    }
    
}