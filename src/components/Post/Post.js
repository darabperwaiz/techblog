import React, { useEffect } from 'react'
import './Post.css'
import { Link } from "react-router-dom"
import RelatedPost from "../RelatedPost/RelatedPost"

function Post({post}) {

  return (
    <div className="__wrapper">
    <div className="post__detail">
      {/* <div className="breadcrumbs">

      </div> */}
        <div className="post__detail__info">
          <h2 className="post__detail__title">{post.title}</h2>
          <div className="post__detail__section">
            <span>0 Comments</span>
            {`•`}
            <span>2 Min Read</span>
            {`•`}
            <span>{post.views} Views</span>
          </div>
        </div>
        <img src={post.thumbnail} alt="" />
        <div dangerouslySetInnerHTML={{__html: post.content}}></div>
        
    </div>
    {/* <div className="prev_nxt_btns">
      <div>previous</div>
      <div>next</div>
    </div> */}
    <RelatedPost />
    </div>
  )
}

export default Post
