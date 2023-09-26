import React from 'react';
import { Link } from "react-router-dom";
import '../../App'
import 'bootstrap/dist/css/bootstrap.min.css'   
import './Logged.css';
import thumbsupgif from '../../assets/thumbsup.gif'

function Logged() {
    return <div id="logged-container" className="d-flex justify-content-center align-items-center vh-100">
        <div id="logged-bg" className="p-3 w-25">
            <h1>Welcome!</h1>
            <br/>
            <p>You are succesfully logged in.</p>
            <br/>
            <img src={thumbsupgif} alt="Your GIF Alt Text" />
            <Link to="/">
                <button className="btn-logout">Logout</button>
              </Link>
        </div>
    </div>
}

export default Logged