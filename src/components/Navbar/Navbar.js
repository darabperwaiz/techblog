import React, { useEffect, useState } from 'react'
import { Link, Navigate, Outlet, redirect } from "react-router-dom"
import { jwtDecode } from "jwt-decode";
import './Navbar.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "../Footer/Footer";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  const [isLight, setIsLight] = useState(true)
  const [theme, setTheme] = useState("light-theme")
  const [user, setUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleMenu = () => {
    setMenuActive(!menuActive)
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    const token = localStorage.getItem('token')
    if(!token) {
      setIsLoggedIn(false)
    }
  }



  function toggleTheme () {
    setIsLight(!isLight)
    setTheme(theme === "light-theme" ? "dark-theme" : "light-theme")
  }

  useEffect(()=> {
    const token = localStorage.getItem('token');
    if(token) {
      setIsLoggedIn(true)
      const user = jwtDecode(token)
      setUser(user)
    }
  },[])

  useEffect(()=> {
    document.body.className = theme
  }, [theme])

  useEffect(()=> {
    AOS.init({
      duration: 1000,
      easing: 'ease',
      once: true,
    });
  })

  console.log(user)
  
  return (
    <>
      <div className="navbar">
        <div className="navbar__wrapper">
          <div className="nav__right">
            <div className="logo" data-aos="fade-right">
            tech<span style={{fontWeight: 'bold'}}>blog.</span>
            </div>
            <div className={isLight ? "theme-toggle" : "theme-toggle active"}>
            <i className="fa-solid fa-moon"></i>
            <i className="fa-solid fa-sun"></i>
            <div className={isLight ? "theme-toggle-btn": "theme-toggle-btn active"} onClick={toggleTheme}></div>
            </div>
            </div>
            <div className="mobile-icon" onClick={handleMenu}>
            {menuActive ? 'X' : <i className="fa-solid fa-bars-staggered"></i>}
            </div>
            <ul className={menuActive ? 'nav-items active' : 'nav-items'}  data-aos="fade-down">
                <li className="nav-item">
                    <Link to='/' >Home</Link>
                </li>
                <li className="nav-item">
                    <Link to='/search?category=technology' >Technology</Link>
                </li>
                <li className="nav-item">
                    <Link to='/search?category=gadget' >Gadget</Link>
                </li>
                <li className="nav-item">
                    <Link to='/search?category=software' >Software</Link>
                </li>
                <li className="nav-item">
                    <Link to='/aboutus' >About Us</Link>
                </li>
                <li className="nav-item">
                    <Link to='/contactus' >Contact Us</Link>
                </li>
                <li className="nav-item">
                    {isLoggedIn ? 
                    <div className="user__icon__wrapper">
                      <div className="user_img">
                        <img src="https://cdn.icon-icons.com/icons2/3514/PNG/512/man_person_avatar_user_profile_icon_221064.png" alt="" />
                      </div>
                      <div className="user__info__">
                        <div className="user__welcome_">
                          <p>Welcome Back!</p>
                          <p>User Name</p>
                        </div>
                        <Link to='admin/dashboard'><i class="fa-solid fa-sliders"></i> Dashboard</Link>
                        <p onClick={handleLogout}><i class="fa-solid fa-right-from-bracket"></i> Logout</p>
                      </div>
                    </div> 
                    : 
                    <Link to='/login'>Login</Link>}
                </li>
            </ul>
        </div>
      </div>
      <Outlet />
      <Footer />
    </>
  )
}

export default Navbar
