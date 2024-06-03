import React from "react";
import "./Container.css";
import Blogs from "../Blogs/Blogs";
import Widgets from "../widgets/Widgets";

function Container() {
  return (
    <div className="main-container">
      <div className="container__wrapper">
        <Blogs />
        <Widgets />
      </div>
    </div>
  );
}

export default Container;
