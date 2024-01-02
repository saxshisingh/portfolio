import { Link } from "react-router-dom";
import "./AboutContentStyles.css"; 
import pro1 from "../assets/intro-bg.jpg";
import pro2 from "../assets/intro-bg.jpg";

import React from 'react';

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I'm a Machine Learning Engineer, and also a web developer. I create responsive secure websites for my clents.</p>
            <Link to="/contact">
                <button className="btn"> Contact </button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stacktop">
                    <img src={pro1} className="img" alt="true" />
                </div>
                <div className="img-stackbottom">
                    <img src={pro2} className="img" alt="true" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent;
 