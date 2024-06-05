import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./DetailPage.css";
// import { Posts } from "../../Posts";
import Widgets from "../../components/widgets/Widgets";
import Post from "../../components/Post/Post";
import { PostContext } from "../../PostContext/UserContext";
import axios from "axios";
import Spinner from "../../components/Spinner/Spinner";
import Seo from "../../components/SEO/Seo";

function DetailPage() {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState([]);
  const url = window.location.href
  const { slug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data } = await axios.get("https://techblog-api-pgym.onrender.com/api/v1/");
      const filter = data.posts.filter((post) => post.slug == slug);
      setPost(...filter);
      setLoading(false);
      axios({
        method: 'put',
        url: `https://techblog-api-pgym.onrender.com/api/v1/update/${filter[0]._id}`,
        data: {views: filter[0].views + 1}
      })
    };
    fetchData();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  },  [slug]);


  return (
    <div className="detailPage">
      <Seo
        title={post.title}
        description={post.description}
        name="TechBlog"
        type="website"
        keywords='html, css, javascript, react, nodejs, mongodb, express'
        url={url}
      />
      {loading ? <Spinner /> :
        <Post post={post} />
      }
      
      <Widgets />
    </div>
  );
}

export default DetailPage;
