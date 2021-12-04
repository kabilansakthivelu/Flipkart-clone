import React from 'react';
import {TiPlusOutline} from 'react-icons/ti';
import {BsSearch, BsFillCartFill} from 'react-icons/bs';
import {MdOutlineExpandMore} from 'react-icons/md';
import './Header.css';

const Header = () => {
    return (
        <div className="headerBar">

        {/* Logo Section */}
        <div className="logoSection">
        <h1 className="logoName">Flipkart</h1>

        {/* Explore menu */}
        <div className="exploreOption">
        <p className="exploreOptionText">Explore <span className="explorePlusOption">Plus </span> </p>
        <sup><TiPlusOutline className="explorePlusIcon"/></sup> 
        </div>
        </div>

        {/* Search Tab */}
        <div className="searchTab">
        <input className="searchField" type="text" name="search" id="search" placeholder="Search for products, brands and more" />
        <BsSearch className="searchIcon"/>
        </div> 

        {/* Login button */}
        <div className="loginButton">
        <button className="loginBtnText">Login</button>
         </div>

        {/* More Navbar */}
         <div className="moreNavBar">
        <button className="moreNavbarText">More</button>
        <MdOutlineExpandMore className="moreNavbarIcon"/>
        </div>

        {/* Cart Navbar */}
        <div className="cartNavBar">
        <BsFillCartFill className="cartNavbarIcon"/>
        <button className="cartNavbarText">Cart</button>
        </div>
        
        </div>
    )
}

export default Header
