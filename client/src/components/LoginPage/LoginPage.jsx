import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import '../../App'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import './LoginPage.css';
import logo from '../../assets/logo.png'

function LoginPage() {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const [authMessage, setAuthMessage] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', { login, password })
      .then(result => {
        setAuthMessage(result.data);
        if (result.data === "Login successful. ✔️") {
          navigate('/logged');
        }
      })
      .catch(err => console.log(err));
  }
  
  return (
    <div id="body-bg" className="d-flex justify-content-center align-items-center vh-100">
      <div id="form-bg" className="p-3 w-25">
      <div id="logo-container">
          <img id="logo" src={logo} alt="Logo" />
        </div> 
        <h2>Sign in</h2>
        <p id="signin">Welcome to my very first login system, which was made with Node.JS and React!<br></br>
        Please insert your login/email and password for authentication.</p>
        <form onSubmit={handleSubmit}>
          <div id="d-login" className="mb-3">
            <label htmlFor="login">
              <strong>Login</strong>
            </label>
            <input 
              type="text" 
              placeholder="Enter username/email..." 
              autoComplete="off" 
              id="login-input" 
              name="email"  
              onChange={(e) => setLogin(e.target.value)}
            />
          </div>

          <div id="d-pw" className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input 
              type="password" 
              placeholder="Enter password..." 
              autoComplete="off" 
              id="pw-input" 
              name="password"  
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="action-container">
            <button type="submit" className="btn-login">Login</button>
          </div>
        </form>
        <br></br>
        {authMessage && (
          <div className="auth-message">
            {authMessage}
          </div>
        )}
      <br></br>
      <p id="or">or</p>
      </div>
      <div className="link-container">
              <br></br>
              <h6 className="dont">Not signed up? Let's create your account!</h6>
              <Link to="/register">
                <button className="btn-create">Create Account</button>
              </Link>
            </div>
    </div>
    
  )
}

export default LoginPage
