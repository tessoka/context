import React from 'react'
import { Link } from "react-router-dom";
import Profile from "./Profile";

const Navbar = () => {


  return (
    <nav>
      <Profile />
      <Link to="/"><button className="btn">Home</button></Link>
      <Link to="/login"><button className="btn">Login</button></Link>
    </nav>
  )
}

export default Navbar
