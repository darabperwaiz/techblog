import React, { useContext, useEffect, useState } from 'react'
import './Dashboard.css'
import {barChartBoxVisit} from './BarChartData'
import LinechartBox from "../../components/Charts/LineChartBox/LinechartBox";
import PieChartBox from "../../components/Charts/PieChartBox/PieChartBox";
import axios from "axios";

const Dashboard = () => {

  const [Posts, setPosts] = useState([])

  useEffect(()=> {
    const fetchData = async ()=> {
      const {data} = await axios.get('https://techblog-api-pgym.onrender.com/api/v1/')
      setPosts(data.posts)
    }
    fetchData()
  },[])
  return (
    <div className="dashboard__wrapper">
    <div className="Dashboard">
      <div className="dashboard__breadcrumb">
        <h4>Dashboard</h4>
        <p>Home / Dashboard</p>
      </div>
      <div className="dashboard__cards"> 
        <div className="dashboard__card">
          <div className="dashboard__card__info">
            <p>Posts</p>
            <p>{Posts.length}</p>
          </div>
          <div className="dashboard__card__icon">
          <i className="fa-solid fa-pen-to-square"></i>
          </div>
        </div>

        <div className="dashboard__card">
          <div className="dashboard__card__info">
            <p>Categories</p>
            <p>3</p>
          </div>
          <div className="dashboard__card__icon">
          <i className="fa-solid fa-cubes"></i>
          </div>
        </div>

        <div className="dashboard__card">
          <div className="dashboard__card__info">
            <p>Users</p>
            <p>2</p>
          </div>
          <div className="dashboard__card__icon">
          <i className="fa-solid fa-user"></i>
          </div>
        </div>

      </div>
      <div className="visitor__posts">
        <div className="visitor__graph">
          <div className="visitor__graph__top">
            <p>Visitor Growth</p>
          </div>
          <LinechartBox {...barChartBoxVisit}/>
        </div>
        <div className="latest__posts">
          <p>Latest Posts</p>
          <div className="dashboard__latest_post_wrapper">
            {Posts.map((post, index)=> index < 3 && (
              <div className="dashboard__latest_post">
                <p>{post.title}</p>
                <p>{post.date}</p>
              </div>
              
            ))}
          </div>
        </div>
      </div>
      <div className="visitor__types">
        <div className="visitor__types__card">1</div>
        <div className="visitor__types__card">
          <div>
            <p>Visitor By Browser</p>
          </div>
          
          <LinechartBox {...barChartBoxVisit}/>
    
          <div className="browser__icon__container">
            <div className="browser_icon_wrapper">
              <div className="browser__icon__">
                <div className="browser__img_container"><img src="https://cdn-icons-png.flaticon.com/128/888/888846.png" alt="" /></div>
                <div className="browser__info_wrapper">
                <p>Chrome Users</p>
                </div>
              </div>
              <p className="browser__visitor_count">+845</p>
            </div>

            <div className="browser_icon_wrapper">
              <div className="browser__icon__">
                <div className="browser__img_container"><img src="https://cdn-icons-png.flaticon.com/128/5968/5968827.png" alt="" /></div>
                <div className="browser__info_wrapper">
                <p>Firefox Users</p>
                </div>
              </div>
              <p className="browser__visitor_count">+245</p>
            </div>

            <div className="browser_icon_wrapper">
              <div className="browser__icon__">
                <div className="browser__img_container"><img src="https://cdn-icons-png.flaticon.com/128/5968/5968890.png" alt="" /></div>
                <div className="browser__info_wrapper">
                <p>Edge Users</p>
                </div>
              </div>
              <p className="browser__visitor_count">+100</p>
            </div>

            <div className="browser_icon_wrapper">
              <div className="browser__icon__">
                <div className="browser__img_container"><img src="https://cdn-icons-png.flaticon.com/128/668/668290.png" alt="" /></div>
                <div className="browser__info_wrapper">
                <p>Safari Users</p>
                </div>
              </div>
              <p className="browser__visitor_count">+50</p>
            </div>
           
          </div>
        </div>
        <div className="visitor__types__card">
          <div className="visitor__types__card_top">
            <p>Visitors By Device</p>
          </div>
          <PieChartBox />          
        </div>
      </div>
    </div>
    </div>
  )
}

export default Dashboard
