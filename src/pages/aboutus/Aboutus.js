import React from 'react'
import './Aboutus.css'
import Seo from "../../components/SEO/Seo"

const Aboutus = () => {
  const url = window.location.href
  return (
    <div className="aboutUs__container">
       <Seo
        title="About-us"
        description="Resources to Help Product Teams Ship Amazing Digital Experiences"
        name="TechBlog"
        type="website"
        keywords='html, css, javascript, react, nodejs, mongodb, express'
        url={url}
      />
      <div className="about__hero__container">
        About Us
      </div>
    </div>
  )
}

export default Aboutus
