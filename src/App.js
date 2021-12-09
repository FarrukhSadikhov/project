

import React, { useEffect,useState } from "react";
import { Switch, Route } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Content from "./components/Content";
import Register from "./components/Register";
import Footer from "./components/Footer";
import Map from "./components/Map";


function App() {


  return (
    <div className="App">
    
       <Header/>
       <Switch>
       <Route exact  path="/">
           <Home />
           <Map/>
         </Route>
         <Route  path="/about">
           <About />
         </Route>
         <Route  path="/servise">
           <Service />
         </Route>
         <Route  path="/plan">
           <Content />
         </Route>
         <Route  path="/regiser">
         <Register/>
         </Route>
       </Switch>
       <Footer/> 
       
       {/* <Home/>
       <About/>
       <Service/>
       <Content/>
       <Register/>
       <Footer/> */}
      
     </div>
  );
}

export default App;
