import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Register.css';


function Register() {
    const [fullname, setFullname] = useState();
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const Submit = (e) => { 
        e.preventDefault();
        axios.post("http://localhost:3001/register", {fullname, login, password})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.error(err))
    }
    
    return (
        <div id="register-body-bg" className="d-flex justify-content-center align-items-center vh-100">
        <div id="register-form-bg" className="p-3 w-25">
          <h2>Sign up</h2>
          <p id="signup">Please insert a valid name, login and password to register in our database. Please keep in mind this information will be required for the login authentication</p>
          <form onSubmit={Submit}>
          <div id="reg-d-name" className="mb-3">
              <label htmlFor="fullname">
                <strong>Name</strong>
              </label>
              <input 
                type="text" 
                placeholder="Enter full name..." 
                autoComplete="off" 
                id="reg-fullname-input" 
                name="fullname"  
                onChange={(e) => setFullname(e.target.value)}
              />
            </div>
            
            <div id="reg-d-login" className="mb-3">
              <label htmlFor="login">
                <strong>Login</strong>
              </label>
              <input 
                type="text" 
                placeholder="Enter username/email..." 
                autoComplete="off" 
                id="reg-login-input" 
                name="email"  
                onChange={(e) => setLogin(e.target.value)}
              />
            </div>
  
            <div id="reg-d-pw" className="mb-3">
              <label htmlFor="password">
                <strong>Password</strong>
              </label>
              <input 
                type="password" 
                placeholder="Enter password..." 
                autoComplete="off" 
                id="reg-pw-input" 
                name="password"  
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="reg-container">
              <button type="submit" className="btn-register">Create</button>
            </div>
          </form>
          <br></br>
        </div>
      </div>
    )
}

export default Register