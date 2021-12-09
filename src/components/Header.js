import React, { useEffect, useRef } from "react";
import {NavLink} from "react-router-dom";
import basket from "../images/basket.svg";
import burger from "../images/burger.jpg";
import {ReactComponent as Basket} from "../images/basket1.svg";
import {ReactComponent as User} from "../images/user.svg";


function Header() {

    const headRef = useRef()

    useEffect(() => {
        
        window.addEventListener('scroll', () => {
            // console.log(parseInt(window.pageYOffset))
            if (parseInt(window.pageYOffset) > 100) {
                console.log("100")
                headRef.current.style.position = "fixed"
                headRef.current.style.width = "100%"
                headRef.current.style.backgroundColor = "#171717"
                headRef.current.style.zIndex = "1000"
                

            } else {
                headRef.current.style.position = "fixed"
                headRef.current.style.backgroundColor = "transparent"
                headRef.current.style.width = "100%"
                headRef.current.style.zIndex = "1000"
            }
        });
    }, [])


    return (
        <div id="root">
            <div className="App">
                <div ref={headRef} className="header">
                    <header>
                        {/* <a href="#" className="logo">
                            <span>FIT</span>MARKET</a> */}
                            <NavLink className="logo" to="/">
                            <span>FIT</span>MARKET
                                </NavLink>
                        <div id="menu" className="fa fa-bars"><img className="burger" src={burger} />
                        </div>
                        <nav className="navbar">
                            
                            <ul>
                                <li>
                                   {/* <NavLink  to="/">
                                       ƏSAS SƏHİFƏ
                                    </NavLink> */}
                                    <NavLink className="ab" to="/About">
                                        Haqqinda
                                    </NavLink>
                                    <NavLink className="ab" to="/servise">
                                        Məhsullar
                                    </NavLink>
                                    <NavLink className="ab" to="/plan">
                                        Endirimli məhsullar
                                    </NavLink>
                                    <NavLink className="ab" to="/regiser">
                                    <User className="icon-svg" />
                                    </NavLink>
                                    <NavLink to="/basket">
                                        <Basket className="icon-svg" />
                                    </NavLink>
                                    <img className="burger" src={burger} />
                                </li>
                                {/* <li><a className="active" href="#home">ƏSAS SƏHİFƏ</a></li>
                                <li><a href="#about">Haqqinda</a></li>
                                <li><a href="#service">Məhsullar</a></li>
                                <li><a href="#plan">Endirimli məhsullar</a></li>
                                <li><a href="#register">Qeydiyyat</a></li>
                                <li><a href="#"><img src={basket}/></a></li> */}
                                
                            </ul>
                       
                        </nav>
                    </header>
                </div>
            </div>

        </div>

    )
}

export default Header
