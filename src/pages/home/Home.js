import React, { useEffect, useState } from 'react'
import HeroSection from "../../components/HeroSection/HeroSection"
import Container from "../../components/BlogsContainer/Container"

function Home() {
  const [showHeroSection, setShowHeroSection] = useState(true)

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
    {showHeroSection && <HeroSection />}
      
      <Container />
    </>
  )
}

export default Home
