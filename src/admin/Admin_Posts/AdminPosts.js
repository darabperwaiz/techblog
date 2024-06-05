import React, { useContext, useEffect, useState } from 'react'
import { PostContext } from "../../PostContext/UserContext"
import axios from "axios"
import { Link } from "react-router-dom"
import "./AdminPost.css"
import showDeleteConfirm from "../DeleteDialogBox"
import EditModal from "../EditModal"
import AdminPost from "./AdminPost"
import Seo from "../../components/SEO/Seo"

const AdminPosts = () => {

  const [Posts, setPosts] = useState([])
  const [statusChange, setStatusChange] = useState({})
  const url = window.location.href

  const deletePostHandler = (id) => {
    showDeleteConfirm(id)
  }

  // console.log(statusChange)
 
  useEffect(()=> {
    const fetchData = async () => {
      try {
        const data = await axios.get('https://techblog-api-pgym.onrender.com/api/v1/')
        setPosts(data.data.posts)
      } catch (error) {
        console.log(error)
      }

    }
    fetchData()
  },[statusChange])

  

  return (
    <div className="admin__posts_wrapper">
       <Seo
        title="Admin - Posts"
        description="Resources to Help Product Teams Ship Amazing Digital Experiences"
        name="TechBlog"
        type="website"
        keywords='html, css, javascript, react, nodejs, mongodb, express'
        url={url}
      />
      <div className="posts_list">
        
        {Posts.map((post)=> (
          <AdminPost post={post} statusChange={statusChange} setStatusChange={setStatusChange} deletePostHandler={deletePostHandler}/>
        ))}
        {/* <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
              <th>Publishe On</th>
              <th>Views</th>
              <th>Action</th>
            </tr>
            </thead>
          <tbody>
            {Posts.reverse().map((post)=> (
              <tr key={post._id}>
              <td><div className="title____wrapper"><img src={post.thumbnail} alt="" /><p>{post.title}</p></div></td>
              <td ><p className="post__status" style={post.status == 'Published' ? {backgroundColor: "#03c803"}: {backgroundColor: "#ff4545"}}>{post.status}</p></td>
              <td>{post.date}</td>
              <td>
              {post.views}
              </td>
              <td className="action-btns">
                <Link to={`edit-post/${post._id}`}>
                <i className="fa-solid fa-pencil" ></i>
                </Link>
              
              <i className="fa-solid fa-trash" onClick={()=> deletePostHandler(post._id)}></i>
              </td>
              <td>{post.status == 'Published' ? <p style={{color: 'grey', cursor: 'not-allowed'}}>Publish</p> : <p style={{color: '#03c803', cursor: 'pointer'}} </td>
              <td>{post.status == 'Unpublished' ? <p style={{color: 'grey', cursor: 'not-allowed'}}>Unpublish</p> : <p style={{color: "#ff4545", cursor: 'pointer'}} onClick={()=>statushandle(post._id, {status: 'Unpublished'})}>Unpublish</p>}</td>
            </tr>
            ))}
          </tbody>
        </table> */}
      </div>
    </div>
  )
}

export default AdminPosts
