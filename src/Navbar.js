import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <i><h1>Movies</h1></i>
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
                
              

              {/* <li className="nav-item">
                <Link to="/about" className="nav-link ">
                  About
                </Link>
              </li> */}

              <li className="nav-item">
                <Link to="/movies" className="nav-link">
                  Movies
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/add_movie"  className="nav-link active">
                  Add Movie
                  </Link>
                   
                  
                </li>
            </ul>
          </div>
      
        
      </nav>
    </div>
  );
}

export default Navbar;
