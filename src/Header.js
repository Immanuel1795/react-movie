import React, { useContext } from 'react'
import {Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import ThemeContext from "./theme";
import {Helmet} from "react-helmet";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import IconButton from "@mui/material/IconButton";
import LightModeIcon from '@mui/icons-material/LightMode';


function Header(props) {

  const theme  = useContext(ThemeContext)
  
 
  
    return (
        <div >
        
        <Helmet bodyAttributes={{style: `background-color : ${theme.backgroundColor}`}}/>



        
             <div style={theme}>
            <Navbar  expand="lg" style={theme}>
           
    <Navbar.Brand style={theme} className="navbar-brand-name">Movie Hub</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" className="dddddd"/>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
     
                <Link to="/movies" className="nav-link">
                <Navbar.Text style={theme} className="nav-text">Movies</Navbar.Text>
                </Link>
              
                <Link to="/add_movie"  className="nav-link active">
                <Navbar.Text style={theme} className="nav-text">Add Movie</Navbar.Text>
                  </Link>

               

                <IconButton
              color="secondary"
              aria-label="details"
              size="large"
              onClick={()=>props.onThemeChange()}
            >

           { theme.backgroundColor === "black" ?  <LightModeIcon fontSize="inherit" /> : <DarkModeIcon fontSize="inherit" />}
              
            </IconButton>
                 
        
        
      </Nav>
    </Navbar.Collapse>
 
</Navbar>
        </div>
        </div>
    )
}

export default Header
