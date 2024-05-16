import { Link } from 'react-router-dom'

import "./Navbar.css";
//import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
        <h1 className="AppName">
            <Link to={`/`}>
                Welcome to your eccomerce
            </Link>
        </h1>

        <ul className="options">
            <li>
                <Link to={`/`} className="home-btn">
                    Home
                </Link>
            </li>
            <li className="produtos">
                <Link to={`/produto`}>
                    Your Products
                </Link>
            </li>
            <li className="clientes">
                <Link to={`/cliente`}>
                    Your Customers
                </Link></li>
        </ul>
    </nav>
  )
}

export default Navbar