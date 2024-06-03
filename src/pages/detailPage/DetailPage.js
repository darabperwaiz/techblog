import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./DetailPage.css";
// import { Posts } from "../../Posts";
import Widgets from "../../components/widgets/Widgets";
import Post from "../../components/Post/Post";
import { PostContext } from "../../PostContext/UserContext";
import axios from "axios";

function DetailPage() {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data } = await axios.get("http://localhost:4000/api/v1/");
      const filter = data.posts.filter((post) => post.slug == slug);
      setPost(...filter);
      setLoading(false);
      axios({
        method: 'put',
        url: `http://localhost:4000/api/v1/update/${filter[0]._id}`,
        data: {views: filter[0].views + 1}
      })
    };
    fetchData();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  },  [slug]);

  {loading && <div>Loading...</div>}

  return (
    <div className="detailPage">
      <Post post={post} />
      <Widgets />
    </div>
  );
}

export default DetailPage;
