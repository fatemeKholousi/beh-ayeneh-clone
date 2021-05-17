import React from 'react'
import "./navbarstyle.css"
import logo from './footerLogo.png';
 const Navbar = () => {
    return (
<div>
<header className="header">
        <nav className="navbar">
            <ul className="nav-menu">
            <button id="my_shop">فروشگاه من</button>
            <span className="links">
                <li className="nav-item">
                    <a href="#" className="nav-link">درباره ما</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">کسب و کار</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">پشتیبانی</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">سوالات متداول</a>
                </li>
                </span>
            </ul>




        

    



            <a href="#" className="nav-logo">
                <img style={{width:'200px'}} src={logo} className="nav-logo-img"/> </a>  
        </nav>
    </header>
</div>)}







    
// ______________________________________
// let hamburger = document.querySelector(".hamburger");
// let navMenu = document.querySelector(".nav-menu");
// let navLink = document.querySelectorAll(".nav-link");
// hamburger.addEventListener("click", mobileMenu);
// navLink.forEach((n) => n.addEventListener("click", closeMenu));

// function mobileMenu() {
//   hamburger.classList.toggle("active");
//   navMenu.classList.toggle("active");
// }

// function closeMenu() {
//   hamburger.classList.remove("active");
//   navMenu.classList.remove("active");
// }


export default Navbar;
