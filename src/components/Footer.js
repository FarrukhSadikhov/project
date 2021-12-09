import React from "react";
import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fafacebook } from '@fortawesome/free-brands-svg-icons';
import {ReactComponent as Right} from "../images/right.svg";
import {ReactComponent as Facebook} from "../images/facebook.svg";
import {ReactComponent as Twitter} from "../images/twitter.svg";
import {ReactComponent as Instagram} from "../images/instagram.svg";
import {ReactComponent as Linkedin} from "../images/linkedin.svg";



function Footer() {

    return (
        // <section class="footer">
        //     <div class="container">
        //     <div class="row mt-5 py-5">
        //         <div class="col-lg-3 col-xl-3 col-md-6 col-sm-12 footer-item-logo-parent">
        //             <div class="footer-item-logo">
        //                 {/* <img src="./resources/img/logo-white.svg" alt=""> */}
        //                 <h3 ><span className="fit">FIT</span>MARKET</h3>
        //             </div>
        //         </div>
        //         <div class="col-lg-3 col-xl-3 col-md-6 col-sm-12">
        //             <div class="footer-item">
        //                 <h3>Bizi izləyin</h3>
        //                 <div class="social-footer">
        //                     {/* <a href="#"> <img src="./resources/img/instagram 1.svg" alt=""></a> */}
        //                     {/* <a href="#"> <img src="./resources/img/facebook 1.svg" alt=""></a> */}
        //                 </div>
        //             </div>
        //         </div>
        //         <div class="col-lg-3 col-xl-3 col-md-6 col-sm-12">
        //             <div class="footer-item">
        //                 <h3>Əlaqə</h3>
        //                 <a href=""><span>+994 55 123 45 67</span></a>
        //                 <br/>
        //                 <a href=""><span>info@fitmarket.com</span></a>
        //             </div>
        //         </div>
        //         <div class="col-lg-3 col-xl-3 col-md-6 col-sm-12">
        //             <div class="footer-item">
        //                 <h3>Ünvan</h3>
        //                 <span>8 Noyabr Prospekti, Bakı, Азербайджан</span>
        //             </div>
        //         </div>
        //     </div>
        // </div>


        // created by <a href="#">mr. Farrukh Sadikhov</a> | all rights reserved.
    // </section>

          
          <section class="footer">

             <div class="box-container">

    <div class="box">
        <h3>Bağlantılar</h3>
        {/* <FontAwesomeIcon icon={fafacebook} /> */}
        <NavLink className="ab" to="/"><Right className="icon-brands-svg"/> <i class="fas"></i>  Əsas səhifə </NavLink>
        <NavLink className="ab" to="/About"><Right className="icon-brands-svg"/> <i class="fas"></i>  Haqqind </NavLink>
        <NavLink className="ab" to="/servise"><Right className="icon-brands-svg"/> <i class="fas"></i>   Məhsullar </NavLink>
        <NavLink className="ab" to="/plan"><Right className="icon-brands-svg"/> <i class="fas"></i> Endirimli Məhsullar </NavLink>
        <NavLink className="ab" to="/regiser"><Right className="icon-brands-svg"/> <i class="fas"></i> Qeydiyyat </NavLink>
        <NavLink className="ab" to="/basket"><Right className="icon-brands-svg"/> <i class="fas"></i> Səbət</NavLink>
        
        
    </div>

    <div class="box">
        <h3>Bizimlə</h3>
        
        <a href="#"><Right className="icon-brands-svg" /> <i class="fas"></i> Əlaqə <span>+994 55 123 45 67</span> </a>
        <a href="#"><Right className="icon-brands-svg" /> <i class="fas"></i> Whatsap <span>+994 55 123 45 67</span> </a>
        <a href="#"><Right className="icon-brands-svg" /> <i class="fas"></i> Ünvan - Səməd Vurğun, Bakı 1000, Азербайджан </a>
       
    </div>

    <div class="box">
        <h3>BİZİ İZLƏ</h3>
        
        <a href="#"><Facebook className="icon-brands-svg" /> <i class="fab fa-facebook-f"></i> facebook </a>
        <a href="#"><Twitter className="icon-brands-svg" /> <i class="fab fa-twitter"></i> twitter </a>
        <a href="#"><Instagram className="icon-brands-svg" /> <i class="fab fa-instagram"></i> instagram </a>
        <a href="#"><Linkedin className="icon-brands-svg" /> <i class="fab fa-linkedin"></i> linkedin </a>
        
    </div>

       

      </div>
         <p className="author"> created by <a href="#">mr. Farrukh Sadikhov</a> | all rights reserved.</p>
    </section>

    
        )
    }
    export default Footer