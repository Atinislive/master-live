import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-dark">
<div className="contianer" >

  <Link className="navbar-brand" to="/Home" > Post your brand here</Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>
  </button>
  
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav" >
   
      <li className="nav-item active">
        <Link className="nav-link" to="/Home"> Home <span className="sr-only"></span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/About">About</Link>
      </li>

    

      <li className="nav-item">
        <Link className="nav-link" to="/Services">Services</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Contacts">Contacts</Link>
      </li>
   
    </ul>
  </div>
  </div>  
</nav>
  )
}

export default Navbar
