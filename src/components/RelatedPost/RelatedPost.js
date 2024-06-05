import React, { useEffect, useState } from 'react'
import './RelatedPost.css'
import { Link } from "react-router-dom"
import axios from "axios"

const RelatedPost = ({postCategory, id}) => {
  const [posts, setPosts] = useState([])
  useEffect(()=> {
    const fetchData = async () => {
      try {
        const {data} = await axios.get('https://techblog-api-pgym.onrender.com/api/v1/')
        setPosts(data.posts)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  // console.log(post?.category?.map((cat, index)=> cat))
  return (
    <div className="related_post_wrapper">
      <p className="relate_posts_title">Related Posts</p>
      <div className="related_post_container">
        {posts.filter((post)=> post.category.includes(postCategory[0]) && post._id !== id).map((post, index)=>  (
          <div className="related__post_box" key={post._id}>
          <Link><img src={post.thumbnail} alt="" /></Link>
          <div className="related__post_info">
            <div className="related__post_info_top"><span>{post.category[0]}</span> <span>{post.date}</span></div>
            <div className="related__post_info_bottom">
             <Link> <p>{post.title}</p></Link>
              <p>{post.description}</p>
            </div>
          </div>
        </div>
        ))}
        
        {/* <div className="related__post_box">post 2</div>
        <div className="related__post_box">post 3</div> */}
      </div>
    </div>
  )
}

export default RelatedPost
