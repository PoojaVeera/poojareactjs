import React from 'react'
import './sidebar.css'
import {Link } from "react-router-dom";


const Sidebar = () => {
    return (
        <div className='test'>
             <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Login">Login</Link></li>
      </ul>

    </div>
    )
}

export default Sidebar