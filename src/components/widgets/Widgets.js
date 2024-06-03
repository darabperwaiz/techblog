import React from 'react'
import './Widgets.css'
import Search from "./SearchWidgets/Search"
import PopularPost from "./PopularPost/PopularPost"

function Widgets() {
  return (
    <div className="widgets">
      <Search />
      <PopularPost />
    </div>
  )
}

export default Widgets
