
// ---------------------------------------------------------

import React, { useState, useRef, useEffect} from "react";
import JoditEditor from "jodit-react";
import { editorConfig } from "../../EditorConfig";
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";
import Seo from "../../components/SEO/Seo";

const EditPage = () => {
  const navigate = useNavigate()
  const editor = useRef(null);
  const [post, setPost] = useState({})
  const url = window.location.href

  const { id } = useParams();
  const getPost = async () => {
    const {data} = await axios.get(`https://techblog-api-pgym.onrender.com/api/v1/${id}`);
    setPost(data);
  };

  useEffect(() => {
    getPost();
  }, []);

// Handle form change
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

// Handle Content Editor
  const handleJoditEditor = (data) => {
    console.log(data)
    setPost({
      ...post,
      content: data,
    });
  };

// Handle Form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const {title, description, category, slug, content, thumbnail, status} = post
    const newObj = {
      title: title,
      description: description,
      category: category,
      slug: slug,
      content: content,
      thumbnail: thumbnail,
      status: status
    }

    axios({
      method: 'put',
      url: `https://techblog-api-pgym.onrender.com/api/v1/update/${id}`,
      data: newObj,
      validateStatus: (status) => {
        return true; 
      },
    }).catch(error => {
        console.log(error);
    }).then(response => {
        console.log(response);
    });

    navigate("/admin/posts")
    // console.log(newObj)
  };

  return (
    <div className="create__post__form">
      <Seo
        title="Edit Blog"
        description="Resources to Help Product Teams Ship Amazing Digital Experiences"
        name="TechBlog"
        type="website"
        keywords='html, css, javascript, react, nodejs, mongodb, express'
        url={url}
      />
      <p>Edit Post</p>
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
              Update
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
              <option value="Published" selected>
                Publish
              </option>
              <option value="Unpublished">Unpublish</option>
            </select>
            <input
              type="text"
              value={post.thumbnail}
              name="thumbnail"
              id=""
              placeholder="Image URL"
              onChange={handleChange}
            />
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

export default EditPage;
