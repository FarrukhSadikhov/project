import React from "react";
import foto1 from '../images/foto1.jpg'
import foto2 from '../images/foto2.jpg'
import foto3 from '../images/foto3.jpg'
import foto4 from '../images/foto4.jpg'
import foto5 from '../images/foto5.jpg'
import foto6 from '../images/foto6.jpg'
import foto7 from '../images/foto7.jpg'
import foto8 from '../images/foto8.jpg'
import foto9 from '../images/foto9.jpg'


function Service(){
    return (
     
        
<section className="service" id="service">

<h1 className="heading">Məhsullar</h1>

<div className="box-container">

    <div className="box">
        <img src={foto1}/>
        <div className="info">
            <h3>Whey</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus a distinctio excepturi libero eveniet amet id vel minima officiis doloribus.</p>
            {/* <a href="#"><button className="btn">Ətraflı məlumat</button></a> */}
            <a href="#"><button className="btn">səbətə at</button></a>
        </div>
    </div>

    <div className="box">
       <img src={foto2}/>
        <div className="info">
            <h3>Gainer</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus a distinctio excepturi libero eveniet amet id vel minima officiis doloribus.</p>
            <a href="#"><button className="btn">səbətə at</button></a>
        </div>
    </div>

    <div className="box">
        <img src={foto3}/>
         <div className="info">
            <h3>Cosein</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus a distinctio excepturi libero eveniet amet id vel minima officiis doloribus.</p>
            <a href="#"><button className="btn">səbətə at</button></a>
        </div>
    </div>

    <div className="box">
         <img src={foto4}/>
        <div className="info">
            <h3>BCAA</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus a distinctio excepturi libero eveniet amet id vel minima officiis doloribus.</p>
            <a href="#"><button className="btn">səbətə at</button></a>
        </div>
    </div>

    <div className="box">
        <img src={foto5}/>
        <div className="info">
            <h3>Omega3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus a distinctio excepturi libero eveniet amet id vel minima officiis doloribus.</p>
            <a href="#"><button className="btn">səbətə at</button></a>
        </div>
    </div>

    <div className="box">
          <img src={foto6}/>
        <div className="info">
            <h3>Multi Vitamin</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus a distinctio excepturi libero eveniet amet id vel minima officiis doloribus.</p>
            <a href="#"><button className="btn">səbətə at</button></a>
        </div>
    </div>

    
    <div className="box">
         <img src={foto7}/>
        <div className="info">
            <h3>Amino ENERGY</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus a distinctio excepturi libero eveniet amet id vel minima officiis doloribus.</p>
            <a href="#"><button className="btn">səbətə at</button></a>
        </div>
    </div>

    <div className="box">
        <img src={foto8}/>
        <div className="info">
            <h3>GOLD STANDARD GAINER</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus a distinctio excepturi libero eveniet amet id vel minima officiis doloribus.</p>
            <a href="#"><button className="btn">səbətə at</button></a>
        </div>
    </div>

    <div className="box">
          <img src={foto9}/>
        <div className="info">
            <h3>GOLD STANDARD 100% ISOLATE</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus a distinctio excepturi libero eveniet amet id vel minima officiis doloribus.</p>
            <a href="#"><button className="btn">səbətə at</button></a>
        </div>
    </div>
    

</div>

</section>
    )
}
export default Service