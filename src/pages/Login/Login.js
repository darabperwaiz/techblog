import axios from "axios"
import React, { useContext, useState } from 'react'
import { UserContext } from "../../PostContext/UserContext"
import './Login.css'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState('')

    const dispatch = useContext(UserContext)

const handleSubmit = async (e) => {
    e.preventDefault()
    await axios({
        method: "post",
        url: 'https://techblog-api-pgym.onrender.com/api/v1/user/login',
        data: {email, password}
    }).then(res=> {
        console.log(res.data.token)
        const token = res.data.token
        localStorage.setItem("token", token);
        window.location.href = '/'
      //  return <Navigate to='/' replace={true}/>
    }).catch(err=> {
        console.log(err.response.data.message)
        setError(err.response.data.message)
        setEmail("")
        setPassword("")
    })
}
  return (
    <div className="login_container">
      <div className="login__wrapper">
        <div className="login_welcome__message">
          <p>Hello,</p>
          <p>Welcome!</p>
        </div>
        <form className="login__form" onSubmit={handleSubmit}>
          {!error == "" ? <p style={{color: "red"}}><i class="fa-solid fa-circle-exclamation"></i> {error}</p> : null }
          <input type="text" value={email} name="email" placeholder="Email" onChange={(e)=> setEmail(e.target.value)}/>
          <input type="password" value={password} name="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)}/>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
