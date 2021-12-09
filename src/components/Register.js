import React from "react";

function Register(){

    return (
       
     
<div class="register" id="register">

<h1 class="heading">Qeydiyyat</h1>
 
    <p className="regi">İstifadəçi məlumatlarınızı daxil edin. </p>

<form action="">

    <div class="inputBox">
        <input type="text" placeholder="Ad"/>
        <input type="text" placeholder="Soyad"/>
    </div>

    <div class="inputBox">
        <input type="email" placeholder="Elektron poçtunuz"/>
        {/* <input type="number" placeholder="Nömrəniz"/> */}
        <input type="password" placeholder="Şifrə"/>
    </div>

    {/* <textarea name="" id="" cols="30" rows="10" placeholder="messaj"></textarea> */}

    <input type="submit" class="btn" value="daxil ol"/>

    <p className="regi">Şifrəni unutmusunuz?<a href="register.html"> <span >Şifrəni unutmusunuz?</span></a></p>

</form>

</div>


    )
}
export default Register