import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand mx-4" href="/"><h2>Goutam Vankudre</h2></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">MENU</span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="section" role="search">
                            <ul className="navbar-nav nav ml-auto">
                                {/* <li className="nav-item"><a href="/home-section" className="nav-link"><span>Home</span></a></li> */}
                                <li className="nav-item"><Link to="#about-section" className="nav-link"><span>About</span></Link></li>
                                <li className="nav-item"><Link to="#skills-section" className="nav-link"><span>Skills</span></Link></li>
                                <li className="nav-item"><Link to="#services-section" className="nav-link"><span>Services</span></Link></li>
                                <li className="nav-item"><Link to="#contact-section" className="nav-link"><span>Contact</span></Link></li>
                            </ul>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
