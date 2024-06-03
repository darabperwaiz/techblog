import React, { useContext, useEffect, useState } from "react";
import "./Blogs.css";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios'
import BlogBox from "../BlogBox";

function Blogs() {
const [Posts, setPosts] = useState([])

  useEffect(()=> {
    const getPosts = async () => {
      await axios.get('https://techblog-api-pgym.onrender.com/api/v1/')
      .then(res => {
        const result = res.data
        // console.log(result.posts)
          setPosts(result.posts)
      })
    } 
    getPosts()
  }, [])

  return (
    <div className="blogs">
      <p className="recent__posts">
        Recent Posts <i className="fa-solid fa-rss"></i>
      </p>
      <div className="posts__container">
      {Posts.filter((post)=> post.status == 'Published').reverse().map((post, index) => (
          <BlogBox post={post} key={index}/>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
