import React from "react";
import foto7 from '../images/foto7.png'
import foto8 from '../images/foto8.png'
import foto9 from '../images/foto9.png'


 function Content() {

    return (
    
       
<section class="plan " id="plan">

<h1 class="heading">Endirimli məhssullar</h1>

<div class="box-container">

    <div class="box">
    
        
        <h3 class="title">ZÜLAL</h3>
        <h3 class="price">$59</h3>
        <h3 class="month">WHEY PROTEIN</h3>
        <img src={foto7}/>
        <a href="#"><button class="btn">səbətə at</button></a>
    </div>

    <div class="box">
        <h3 class="title">ENERJİ</h3>
        <h3 class="price">$39</h3>
        <h3 class="month"> AMIN.O. ENERGY</h3>
        <img src={foto8}/>
        <a href="#"><button class="btn">səbətə at</button></a>
    </div>

    <div class="box">
        <h3 class="title">ÇƏKİ QALDIRANLAR</h3>
        <h3 class="price">$79</h3>
        <h3 class="month">SERIOUS MASS</h3>
        <img src={foto9}/>
        <a href="#"><button class="btn">səbətə at</button></a>
    </div>

    <div class="box">
        <h3 class="title">ÇƏKİ QALDIRANLAR</h3>
        <h3 class="price">$79</h3>
        <h3 class="month">SERIOUS MASS</h3>
        <img src={foto9}/>
        <a href="#"><button class="btn">səbətə at</button></a>
    </div>

    <div class="box">
        <h3 class="title">ÇƏKİ QALDIRANLAR</h3>
        <h3 class="price">$79</h3>
        <h3 class="month">SERIOUS MASS</h3>
        <img src={foto9}/>
        <a href="#"><button class="btn">səbətə at</button></a>
    </div>
    
    <div class="box">
        <h3 class="title">ÇƏKİ QALDIRANLAR</h3>
        <h3 class="price">$79</h3>
        <h3 class="month">SERIOUS MASS</h3>
        <img src={foto9}/>
        <a href="#"><button class="btn">səbətə at</button></a>
    </div>

</div>

</section>
    )
}
export default Content
