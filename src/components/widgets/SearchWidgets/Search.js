import React, { useState } from 'react'
import './Search.css'
import { Link } from "react-router-dom"

function Search() {
  const [search, setSearch] = useState('')

  return (
    <div className="search">
      <input type="text" name="" value={search} placeholder="Search... " onChange={(e)=> setSearch(e.target.value)}/>
      <Link to={`/search?category=${search}`}>
      <div className="search__icon">
        
      <i className="fa-solid fa-magnifying-glass"></i>
      
      </div>
      </Link>
    </div>
  )
}

export default Search
