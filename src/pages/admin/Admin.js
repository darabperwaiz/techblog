import React from 'react'
import './Admin.css'
import AdminNavbar from "../../admin/admin_nav/AdminNavbar"
import { useLocation } from "react-router-dom"
import Seo from "../../components/SEO/Seo"

const Admin = () => {
  const {pathname} = useLocation();
  const actualPath = pathname.split('/').pop()
  const url = window.location.href
  return (
    <div className="admin__container">
       <Seo
        title="Admin"
        description="Resources to Help Product Teams Ship Amazing Digital Experiences"
        name="TechBlog"
        type="website"
        keywords='html, css, javascript, react, nodejs, mongodb, express'
        url={url}
      />
        <AdminNavbar />
        {actualPath == 'admin' && 
          <div className="welcome__message">
            <img src="https://i.gifer.com/origin/e0/e08f73642d422d94483c0ca96f737ac2_w200.gif" alt="" />
            Welcome to admin control panel
          </div>
        }
    </div>
  )
}

export default Admin
