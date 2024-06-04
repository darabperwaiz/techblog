import React, { useContext, useEffect, useState } from "react";
import "./Blogs.css";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios'
import BlogBox from "../BlogBox";
import ClipLoader from "react-spinners/ClipLoader";
import Skleton from "../skleton/Skleton";

function Blogs() {
const [Posts, setPosts] = useState([])
const [loading, setLoading] = useState(false)

  useEffect(()=> {
    const getPosts = async () => {
      
      try {
        setLoading(true)
        const {data} = await axios.get('https://techblog-api-pgym.onrender.com/api/v1/')
        setPosts(data.posts)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    } 
    getPosts()
  }, [])

  return (
    <div className="blogs">
      <p className="recent__posts">
        Recent Posts <i className="fa-solid fa-rss"></i>
      </p>
      <div className="posts__container">
      {loading ?<> <Skleton /> <Skleton /> <Skleton /> </>  :
      <>
        {Posts.filter((post)=> post.status == 'Published').reverse().map((post, index) => (
          <BlogBox post={post} key={index}/>
        ))}</>
      }
      
      </div>
    </div>
  );
}

export default Blogs;
