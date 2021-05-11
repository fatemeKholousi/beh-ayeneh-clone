import React from 'react'
import "./navbarstyle.css"
import logo from './footerLogo.png';
 const Navbar = () => {
    return (
        <div className="container">
<button id="my_shop">فروشگاه من</button>
<div className="right_side_links">
            <button className="btn_link">سوالات متداول</button>
            <button className="btn_link">پشتیبانی</button>
            <button className="btn_link">کسب و کار</button>
            <button className="btn_link">درباره ما</button>
            <img src={logo} alt="Yes" style={{width:'9vw'}}/>
        
           </div>
        </div>
    )
}
export default Navbar;