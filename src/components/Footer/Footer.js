import React from 'react'
import './Footer.css'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <ul className="footer__menu">
            <li><Link>About Us</Link></li>
            <li><Link>Contact Us</Link></li>
            <li><Link>Privacy Policy</Link></li>
            <li><Link>Terms of Services</Link></li>
            <li><Link>Sitemap</Link></li>
        </ul>
        <div className="copyright">
            <p>copyright &#169; 2024</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
