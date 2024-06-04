import React, { useEffect, useState } from 'react'
import { Link, Navigate, Outlet, redirect } from "react-router-dom"
import { jwtDecode } from "jwt-decode";
import './Navbar.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "../Footer/Footer";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  const [isLight, setIsLight] = useState(false)
  const [theme, setTheme] = useState("dark-theme")
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

const handleCloseMenu = () => {
  setMenuActive(false)
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
            <div className="mobile_icon_wrapper">
            <div className="mobile">
              {isLoggedIn ? 
                    <div className="user__icon__wrapper">
                      <div className="user_img">
                        <img src="https://cdn.icon-icons.com/icons2/3514/PNG/512/man_person_avatar_user_profile_icon_221064.png" alt="" />
                      </div>
                      <div className="user__info__">
                        <div className="user__welcome_">
                          <p>Welcome Back!</p>
                          <p>{user.firstName}</p>
                        </div>
                        <Link to='admin/dashboard' className="user__item"><i class="fa-solid fa-sliders" onClick={handleCloseMenu}></i> Dashboard</Link>
                        <p onClick={handleLogout} className="user__item"><i class="fa-solid fa-right-from-bracket"></i> Logout</p>
                      </div>
                    </div> 
                    : 
                    <Link to='/login' onClick={handleCloseMenu}>Login</Link>
                    }
              </div>
              <div className="mobile-icon" onClick={handleMenu}>
              {menuActive ? 'X' : <i className="fa-solid fa-bars-staggered"></i>}
              </div>
            </div>
            <ul className={menuActive ? 'nav-items active' : 'nav-items'}  data-aos="fade-down">
                <li className="nav-item">
                    <Link to='/' onClick={handleCloseMenu}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link to='/search?category=technology' onClick={handleCloseMenu}>Technology</Link>
                </li>
                <li className="nav-item">
                    <Link to='/search?category=gadget' onClick={handleCloseMenu}>Gadget</Link>
                </li>
                <li className="nav-item">
                    <Link to='/search?category=software' onClick={handleCloseMenu}>Software</Link>
                </li>
                <li className="nav-item">
                    <Link to='/aboutus' onClick={handleCloseMenu}>About Us</Link>
                </li>
                <li className="nav-item">
                    <Link to='/contactus' onClick={handleCloseMenu}>Contact Us</Link>
                </li>
                <li className="nav-item desktop">
                    {isLoggedIn ? 
                    <div className="user__icon__wrapper">
                      <div className="user_img">
                        <img src="https://cdn.icon-icons.com/icons2/3514/PNG/512/man_person_avatar_user_profile_icon_221064.png" alt="" />
                      </div>
                      <div className="user__info__">
                        <div className="user__welcome_">
                          <p>Welcome Back!</p>
                          <p>{user.firstName}</p>
                        </div>
                        <Link to='admin/dashboard' className="user__item"><i class="fa-solid fa-sliders" onClick={handleCloseMenu}></i> Dashboard</Link>
                        <p onClick={handleLogout} className="user__item"><i class="fa-solid fa-right-from-bracket"></i> Logout</p>
                      </div>
                    </div> 
                    : 
                    <Link to='/login' onClick={handleCloseMenu}>Login</Link>
                    }
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
