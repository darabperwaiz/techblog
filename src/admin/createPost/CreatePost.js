import React, { useState, useRef, useContext } from "react";
import JoditEditor from "jodit-react";
import "./CreatePost.css";
import { editorConfig } from "../../EditorConfig";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate()
  const editor = useRef(null);
  const [post, setPost] = useState({
    title: "",
    description: "",
    category: "",
    slug: "",
    content: "",
    thumbnail: "",
    status: "Published"
  });

  const handleChange = (e) => {
    const value = e.target.value;
    console.log(value);
    if(e.target.name== 'slug') {
      const str = e.target.value;
      const newSlug = str.split(' ').join('-').toLowerCase()
      setPost({
        ...post, slug: newSlug
      })
    }else {
      setPost({
        ...post,
        [e.target.name]: value,
      });
    }
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: 'post',
      url: 'https://techblog-api-pgym.onrender.com/api/v1/add',
      data: post,
      validateStatus: (status) => {
        return true; 
      },
    }).catch(error => {
        console.log(error);
    }).then(response => {
        console.log(response);
    });

    navigate("/admin/posts")
  };

  const handleJoditEditor = (data) => {
    console.log(data)
    setPost({
      ...post,
      content: data,
    });
  };
  return (
    <div className="create__post__form">
      <form>
        <div className="create-post-form-left">
          <div className="title__wrapper">
            <input
              className="title"
              type="text"
              name="title"
              id=""
              value={post.title}
              placeholder="Post title here"
              onChange={handleChange}
            />
            <button type="submit" className="submit-btn" onClick={handleSubmit}>
              Post
            </button>
          </div>
          
          <JoditEditor
            ref={editor}
            value={post.content}
            config={editorConfig}
            onChange={handleJoditEditor}
          />
        </div>
        <div className="create-post-form-right">
          <p>Post SEO</p>
          <div className="seo__section">
            <select name="status" id="" onChange={handleChange}>
              <option value="Published" selected>Publish</option>
              <option value="Unpublished">Unpublish</option>
            </select>
            <input type="text" value={post.thumbnail} name="thumbnail" id="" placeholder="Image URL" onChange={handleChange}/>
            <div className="seo__category">
              <textarea
                name="category"
                value={post.category}
                id=""
                onChange={handleChange}
                placeholder="Category"
              ></textarea>
              <label>Seprate categories by commas e.g:- test1,test2</label>
            </div>
            <div className="seo__description">
              <textarea
                name="description"
                className="seo__description"
                value={post.description}
                placeholder="Description"
                onChange={handleChange}
              ></textarea>
              <label>Maximum 150 characters.</label>
            </div>
            <input
              type="text"
              name="slug"
              value={post.slug}
              id=""
              className="seo__slug"
              placeholder="Slug"
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
