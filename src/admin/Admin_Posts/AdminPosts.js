import React, { useContext, useEffect, useState } from 'react'
import { PostContext } from "../../PostContext/UserContext"
import axios from "axios"
import { Link } from "react-router-dom"
import "./AdminPost.css"
import showDeleteConfirm from "../DeleteDialogBox"
import EditModal from "../EditModal"

const AdminPosts = () => {

  const [Posts, setPosts] = useState([])

  const deletePostHandler = (id) => {
    showDeleteConfirm(id)
  }


  const statushandle = (id, status) => {
    axios({
      method: 'post',
      url: `https://techblog-api-pgym.onrender.com/api/v1/status/${id}`,
      data: status,
      validateStatus: (status) => {
        return true; 
      },
    }).catch(error => {
        console.log(error);
    }).then(response => {
        console.log(response);
    });

  }
 
  useEffect(()=> {
    const fetchData = async () => {
      const data = await axios.get('https://techblog-api-pgym.onrender.com/api/v1/')
      setPosts(data.data.posts)

    }
    fetchData()
  },[statushandle])

  

  return (
    <div className="admin__posts_wrapper">
      <div className="table__wrapper">
        <table>
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
              <td>{post.status == 'Published' ? <p style={{color: 'grey', cursor: 'not-allowed'}}>Publish</p> : <p style={{color: '#03c803', cursor: 'pointer'}} onClick={()=>statushandle(post._id, {status: 'Published'})}>Publish</p>}</td>
              <td>{post.status == 'Unpublished' ? <p style={{color: 'grey', cursor: 'not-allowed'}}>Unpublish</p> : <p style={{color: "#ff4545", cursor: 'pointer'}} onClick={()=>statushandle(post._id, {status: 'Unpublished'})}>Unpublish</p>}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminPosts
