import React from "react"
import './app.css'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Home from './components/Home/Home'
import Popular from "./components/Popular/Popular"
import Offers from "./components/Offers/Offers"
import Blog from './components/Blog/Blog'
import Footer from './components/Footer/Footer'

const App = () =>{
    return (
        <>
        <Navbar/>
        <Home />
        <Popular />
        <Offers /> 
        <About/>
        <Blog />
        <Footer/>
       
         </>
    )
}
export default App;
    
