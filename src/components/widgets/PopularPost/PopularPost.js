import React, { useEffect, useState } from "react";
import "./PopularPost.css";
import { Posts } from "../../../Posts";
import { Link } from "react-router-dom";
import axios from "axios";

function PopularPost() {
  const [loading, setLoading] = useState(false)
  const [Posts, setPost] = useState([])
  useEffect(()=> {
    const fetchData = async () => {
      const {data} = await axios.get('http://localhost:4000/api/v1/')
      // console.log(data.posts)
      const sorted = data.posts.sort((a, b)=> b.views - a.views)
      // console.log(sorted)
      setPost(sorted)
    }
    fetchData()
  }, [])
  return (
    <div className="popular__posts">
      <p className="head">Popular Posts</p>
      <div className="popular__posts_container">
        {Posts.filter((post)=> post.status == 'Published').map(
          (post, index) =>
            index < 5 && (
              <div className="popular__post" key={index} data-aos="fade-left">
                <img
                  className="popular__post__img"
                  src={post.thumbnail}
                  alt=""
                />
                <div className="popular__post_info">
                  <p className="popular__post__title">
                    <Link to={`/post/${post.slug}`}>
                    {post.title}
                    </Link>
                  </p>
                  <p className="popular__post__date">{post.date}</p>
                </div>
                {
                  index < 3 && (
                    <div className="popular__post_count">{index+=1}</div>
                  )
                }
                
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default PopularPost;
