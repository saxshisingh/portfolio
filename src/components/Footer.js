import "./FooterStyles.css"
import React from 'react'
import {FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa"
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                <div>
                    <p>HNo-856, StreetNo-09, Bhim Nagar, Vijay Nagar</p>
                    <p>Ghaziabad</p>
                    <p>UttarPradesh, India</p>
                </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                    +91  9818506601</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    saxshirajput2612@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About</h4>
                <p>A Computer Science Engineer, willing to do work in Machine Learning ad wen development</p>
            <div className="social">
                <FaFacebook size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                <FaTwitter size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                <FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}}/>

            </div>
            </div>
        </div>  
    </div>
  )
}

export default Footer
