import React from 'react'

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
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Draw-Cicle</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/task2">Draw-Mirror Circle</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/task3">Draw-Four-Quad-Circle</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar