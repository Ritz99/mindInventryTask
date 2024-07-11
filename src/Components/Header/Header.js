import React from 'react'
import "./Header.css"
import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

const Header = () => {
  return (
    <div className='mainHead'>
        <div className='headLogo'>Moody Studio</div>
        <div className='secHead'>
            <div className='headOption'><IoIosSearch /></div>
            <div className='headOption'><CgProfile /></div>
            <div className='headOption'><CiShoppingCart /></div>
            <div className='headOption'><CiHeart /></div>
        </div>
    </div>
  )
}

export default Header