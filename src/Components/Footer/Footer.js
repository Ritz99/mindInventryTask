import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footerMain">
      <div className="flexContainer">
        <div>
          <h3>Urban outfitters</h3>
          <p>Lorem Ipsum is simply dummy text</p>
          <div className="footerIcon">
            <div><FaFacebook /></div>
            <div><FaTwitter /></div>
            <div><FaInstagram /></div>
            <div><FaYoutube /></div>
          </div>
        </div>
        <div>
          <h3>Shopping</h3>
          <p>your cart</p>
          <p>your order</p>
          <p>Compared order</p>
          <p>wishlist</p>
        </div>
        <div>
          <h3>More Links</h3>
          <p>Blog</p>
          <p>Gift center</p>
          <p>Buying Guides</p>
          <p>New Arrivals</p>
          <p>Clearance</p>
        </div>
        <div>
          <h3>More Links</h3>
          <p>Lorem Ipsum is simply dummy text</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
