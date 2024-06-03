import React, { useState } from "react";
import "./AdminNav.css";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

const AdminNavbar = () => {
  const {pathname} = useLocation();
  const actualPath = pathname.split('/').pop()


  return (
    <>
    <div className="admin__nav__wrapper">
      <ul className="admin__nav__menuItems">
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li className={actualPath == 'create-post' ? "active" : ''} >
          <b class="left-curve"></b>
          <b class="right-curve"></b>
          <Link to='create-post'>
          Create Post
          </Link>
          
        </li>
        <li className={actualPath == 'dashboard' ? "active" : ''}  >
          <b class="left-curve"></b>
          <b class="right-curve"></b>
          <Link to='dashboard'>
          Dashboard
          </Link>
          
        </li>
        <li className={actualPath == 'posts' ? "active" : ''} >
          <b class="left-curve"></b>
          <b class="right-curve"></b>
          <Link to='posts'>
          Posts
          </Link>
          
        </li>
      </ul>
    </div>
    <Outlet />
    </>
  );
};

export default AdminNavbar;
