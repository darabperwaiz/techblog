import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function HeroSection() {

  return (
    <><p style={{fontSize: "30px", color: "var(--primary-font-color)"}}>Featured Post</p>
    <div className="Hero-Section">
      
      <div className="hero__wrapper">
        <img src="/images/img-8.jpg" alt="" loading="lazy"/>
        <div className="hero__info">
            <p className="hero__category" data-aos="fade-right">Technology</p>
            <p className="hero__title column_one" data-aos="fade-up"><Link>Say hello to real handmade office furniture! clean & beautiful design</Link></p>
            <p className="hero__date" data-aos="fade-up" data-aos-delay="500">24 JULY, 2024</p>
        </div>
      </div>
      <div className="hero__wrapper">
        <img src="/images/img-9.jpg" alt="" loading="lazy"/>
        <div className="hero__info">
            <p className="hero__category" data-aos="fade-right">Technology</p>
            <p className="hero__title" data-aos="fade-up"><Link>Do not make mistakes when choosing web hosting</Link></p>
            <p className="hero__date" data-aos="fade-up" data-aos-delay="500">24 JULY, 2024</p>
        </div>
      </div>
      <div className="hero__wrapper">
        <img src="/images/img-home.jpg" alt="" loading="lazy"/>
        <div className="hero__info">
            <p className="hero__category"data-aos="fade-right">Technology</p>
            <p className="hero__title" data-aos="fade-up"><Link>The most reliable Galaxy Note 8 images leaked</Link></p>
            <p className="hero__date" data-aos="fade-up" data-aos-delay="500">24 JULY, 2024</p>
        </div>
      </div>
      
    </div>
    </>
  );
}

export default HeroSection;
