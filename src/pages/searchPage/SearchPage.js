import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./SearchPage.css";
import BlogBox from "../../components/BlogBox";
import PopularPost from "../../components/widgets/PopularPost/PopularPost";
import Search from "../../components/widgets/SearchWidgets/Search";
import Spinner from "../../components/Spinner/Spinner";
import Seo from "../../components/SEO/Seo";

const SearchPage = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const url = window.location.href
  const category = query.get("category");
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState({
    errorMessage: "",
    success: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://techblog-api-pgym.onrender.com/api/v1/filter?category=${category.toLowerCase()}`
        );
        setPosts(data);
        
        setError({
          ...error,
          success: false,
        });
        setLoading(false)
      } catch (error) {
        setError({
          errorMessage: error.response.data.message,
          success: true,
        });
        // setError(true);
        setLoading(false)
      }
    };

    fetchData();
  }, [category]);

  return (
    <div className="search__container">
       <Seo
        title={`You searched for ${category}`}
        description="Resources to Help Product Teams Ship Amazing Digital Experiences"
        name="TechBlog"
        type="website"
        keywords='html, css, javascript, react, nodejs, mongodb, express'
        url={url}
      />
      <div className="search_container__wrapper">
        {error.success == false ? <p>({posts.length}) Posts Found</p> : ""}

        <div className="searched__warapper">
          <div className="searched__posts_container">
            {loading ? (
              <Spinner />
            ) : (
              <>
                {error.success ? (
                  <div className="error__wrapper">
                    <div className="error__message">
                      <i class="fa-solid fa-question"></i>
                      {error.errorMessage}
                    </div>
                  </div>
                ) : (
                  <>
                    {posts.map((post, index) => (
                      <BlogBox post={post} key={index} />
                    ))}
                  </>
                )}
              </>
            )}
          </div>
          <div className="aside_container">
            <Search />
            <PopularPost />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
