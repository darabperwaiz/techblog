import axios from "axios"
import React, { useContext, useState } from 'react'
import { UserContext } from "../../PostContext/UserContext"
import './Login.css'
import Spin from "../../components/Spin/Spin"
import Seo from "../../components/SEO/Seo"

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const url = window.location.href

const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await axios({
        method: "post",
        url: 'https://techblog-api-pgym.onrender.com/api/v1/user/login',
        data: {email, password}
    }).then(res=> {
        const token = res.data.token
        localStorage.setItem("token", token);
        // setLoading(false)
        window.location.href = '/'
      //  return <Navigate to='/' replace={true}/>
    }).catch(err=> {
        setLoading(false)
        setError(err.response.data.message)
        setEmail("")
        setPassword("")

    })
}
  return (
    <div className="login_container">
       <Seo
        title="Login"
        description="Resources to Help Product Teams Ship Amazing Digital Experiences"
        name="TechBlog"
        type="website"
        keywords='html, css, javascript, react, nodejs, mongodb, express'
        url={url}
      />
      <div className="login__wrapper">
        <div className="login_welcome__message">
          <p>Hello,</p>
          <p>Welcome!</p>
        </div>
        <form className="login__form" onSubmit={handleSubmit}>
          {!error == "" ? <p style={{color: "red"}}><i class="fa-solid fa-circle-exclamation"></i> {error}</p> : null }
          <input type="text" value={email} name="email" placeholder="Email" onChange={(e)=> setEmail(e.target.value)} required/>
          <input type="password" value={password} name="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} required/>
          <button type="submit">{loading ? <Spin /> : 'Login'}</button>
        </form>
      </div>
    </div>
  )
}

export default Login
