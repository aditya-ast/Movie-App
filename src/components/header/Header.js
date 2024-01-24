import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"
import logo from "../../Logo/logo.png"

const Header = () => {
    return (
        <div className="header">
            <Link to="/"><img src={logo} alt="Logo" width={75} height={75} loading="lazy" /></Link>
            <div className="headerLeft"> 
                <Link to="/movies/popular" style={{textDecoration: "none", textAlign: "center"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none", textAlign: "center"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none", textAlign: "center"}}><span>Upcoming</span></Link>
            </div>
        </div>
    )
}

export default Header