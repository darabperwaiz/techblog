import React from 'react'
import { Link } from "react-router-dom"

const BlogBox = ({post}) => {
  return (
    <div className="post" key={post._id} >
            <div className="post_img" data-aos="fade-up">
              <img
                src={post.thumbnail}
                alt=""
                lazy="true"
              />
            </div>
            <div className="post__info">
            <div className="post__category" data-aos="fade-down">
                  <p>{post.category[0]}</p>
                  <p>{post.date}</p>
                </div>
              <p className="post__title" data-aos="fade-left">
                <Link to={`/post/${post.slug}`}>
                {post.title}
                </Link>
                
              </p>
              {/* <div className="post__scondary__info"> */}
                <p className="post__description" data-aos="fade-up">
                  {post.description}
                </p>
                
              {/* </div> */}
            </div>
          </div>
  )
}

export default BlogBox
