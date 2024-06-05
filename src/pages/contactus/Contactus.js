import React from 'react'
import './Contactus.css'
import Seo from "../../components/SEO/Seo"

const Contactus = () => {
  const url = window.location.href
  return (
    <div className="contactus__container">
       <Seo
        title="Contact us"
        description="Resources to Help Product Teams Ship Amazing Digital Experiences"
        name="TechBlog"
        type="website"
        keywords='html, css, javascript, react, nodejs, mongodb, express'
        url={url}
      />
      Contact Us
    </div>
  )
}

export default Contactus
