import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./SearchPage.css";
import BlogBox from "../../components/BlogBox";
import PopularPost from "../../components/widgets/PopularPost/PopularPost";
import Search from "../../components/widgets/SearchWidgets/Search";

const SearchPage = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const category = query.get("category");
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState({
    errorMessage: "",
    success: false
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://techblog-api-pgym.onrender.com/api/v1/filter?category=${category.toLowerCase()}`
        );
        console.log(data);
        setPosts(data);
        setError({
          ...error, success: false
        });
      } catch (error) {
        console.log(error.response.data.message);
        // setPosts(error.response.data.message);
        setError({
          errorMessage: error.response.data.message, success: true
        })
        // setError(true);
      }
    };

    fetchData();
  }, [category]);

  return (
    <div className="search__container">
      <div className="search_container__wrapper">
        {error.success == false ? <p>({posts.length}) Posts Found</p> : ""}

        <div className="searched__warapper">
          <div className="searched__posts_container">
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
