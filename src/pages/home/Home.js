import React, { useEffect, useState } from 'react'
import HeroSection from "../../components/HeroSection/HeroSection"
import Container from "../../components/BlogsContainer/Container"
import Seo from "../../components/SEO/Seo"

function Home() {
  const [showHeroSection, setShowHeroSection] = useState(true)
  const url = window.location.href
  function hideHeroSection (){
    if(window.innerWidth <= 768) {
      setShowHeroSection(false)
    } else {
      setShowHeroSection(true)
    }
  }

  useEffect(()=> {
    hideHeroSection()
  })
  window.addEventListener('resize', hideHeroSection)
  return (
    <>
     <Seo
        title="TechBlog - Resources to Help Product Teams Ship Amazing Digital Experiences"
        description="Resources to Help Product Teams Ship Amazing Digital Experiences"
        name="TechBlog"
        type="website"
        keywords='html, css, javascript, react, nodejs, mongodb, express'
        url={url}
      />
    {showHeroSection && <HeroSection />}
      
      <Container />
    </>
  )
}

export default Home
