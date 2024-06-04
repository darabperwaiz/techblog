import React, { useState } from 'react'
import { Link } from "react-router-dom"
import Spin from "../../components/Spin/Spin"
import axios from "axios"

const AdminPost = ({post, setStatusChange, statusChange, deletePostHandler}) => {
    const [loading, setLoading] = useState(false)
    const [actionBtn, setActionBtn] = useState(false)

  

  const handleActinBtn = () => {
    setActionBtn(!actionBtn)
  }


  const statushandle = (id, status) => {
  
    setLoading(true)
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
        setLoading(true)
        setStatusChange(response)
        setLoading(false)
    });
    

    

  }



  
  return (
    <div className="admin_post_list">
          <img className="admin_post_list_img" src={post.thumbnail} alt="" />

          <div className="admin_post_list_right">
            <div className="title__action_wrapper">
              <div className="title__action_wrapper_container">{post.title}</div>
              <p className="vertical_ellipsis" onClick={handleActinBtn}><i class="fa-solid fa-ellipsis-vertical"></i></p>
              <div className={ actionBtn ? "post_actions_btns activeAction" : "post_actions_btns"}>
                {post.status == 'Unpublished' ? <p className="action__item" style={{color: 'green'}} onClick={()=>statushandle(post._id, {status: 'Published'})}>{loading ? <Spin /> : <>  <i class="fa-solid fa-location-arrow"></i> Publish </>}</p> : <p className="action__item" style={{color: 'red'}} onClick={()=>statushandle(post._id, {status: 'Unpublished'})}><i class="fa-solid fa-xmark"></i>{loading ? <Spin /> : "Unpublish"}</p>}
              <Link className="action__item" style={{color: "blue"}} to={`edit-post/${post._id}`}>
                <i className="fa-solid fa-pencil" ></i>
                Edit
                </Link>
                <p className="action__item" style={{color: "red"}} onClick={()=> deletePostHandler(post._id)}><i className="fa-solid fa-trash" ></i> Delete</p>
              </div>
            </div>
            <div className="post__info_wrapper">
              <div className="post__info___bottom">
                <p className="style__status" style={post.status == "Published" ? {fontSize: "12px", color: "#02fb02"}: {fontSize: "12px", color: 'red'}}> <span className="dot" style={post.status == "Published" ? {backgroundColor: "#02fb02"}: {backgroundColor: 'red'}}></span> {post.status}</p>
                <p style={{fontSize: '12px', color: "var(--secondry-font-color)"}}>{post.date}</p>
              </div>
              <div className="post__info___bottom">
                <p><i class="fa-solid fa-eye"></i> {post.views}</p>
                <p><i class="fa-solid fa-message"></i> 0</p>
              </div>
            </div>
          </div>
        </div>
  )
}

export default AdminPost
