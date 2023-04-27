import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid m-1">
                    <a className="navbar-brand" href="/">Codemonk</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item m-2 text-decoration-none">

                                <Link to="/" className='text-decoration-none text-light'>Draw-Cicle</Link>

                            </li>
                            <li className="nav-item m-2">
                                <Link to="/task2" className='text-decoration-none text-light'>Draw-Mirror Circle</Link>
                            </li>
                            <li className="nav-item m-2">
                                <Link to="/task3" className='text-decoration-none text-light'>Draw-Four-Quad-Circle</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar