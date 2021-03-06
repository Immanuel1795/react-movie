import React from 'react'
import {Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import {  useHistory } from 'react-router-dom'


import IconButton from "@mui/material/IconButton";

import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


function Header(props) {

  const history = useHistory();

 const styles = [{
   black:{
    color: "#ffffff",
    opacity: "0.7"
   },
   white:{
    color: "white"
   }
 }]






      function logout (){
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        history.push('/users/login')
        props.setSign(false)
      }
 
 
  
    return (
       <Paper>
            <Navbar  className="nav-main" expand="lg"style={{backgroundColor: props.themez && "#0072E5"}} variant="dark" >
           
    <Navbar.Brand  className="navbar-brand-name" style={!props.themez ? styles[0].black : styles[0].white } >Popcorn Time</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav"  >
      <Nav className="me-auto" >

      <Link to="/" className="nav-link">
                <Navbar.Text className="nav-text" style={!props.themez ? styles[0].black : styles[0].white }>About</Navbar.Text>
                </Link>
     
                <Link to="/movies" className="nav-link">
                <Navbar.Text className="nav-text" style={!props.themez ? styles[0].black : styles[0].white }>Movies</Navbar.Text>
                </Link>
              
              
                

                  {/* <Link to="/color_game"  className="nav-link active">
                <Navbar.Text className="nav-text" style={!props.themez ? styles[0].black : styles[0].white }>Color Game</Navbar.Text>
                  </Link> */}

                  

                  {props.sign ? 
                  <>

                  <Link to="/add_movie"  className="nav-link active">
                <Navbar.Text className="nav-text" style={!props.themez ? styles[0].black : styles[0].white }>Add Movie</Navbar.Text>
                  </Link>

                    <Link to="/users/login"  className="nav-link active">
                <Navbar.Text className="nav-text" style={!props.themez ? styles[0].black : styles[0].white } onClick={logout}> Signout </Navbar.Text>
                  </Link>                   
                  </>
                  : 
                   <> 
                   

                  <Link to="/users/signup"  className="nav-link active">
                <Navbar.Text className="nav-text" style={!props.themez ? styles[0].black : styles[0].white }>SignUp</Navbar.Text>
                  </Link>

                  <Link to="/users/login"  className="nav-link active">
                <Navbar.Text className="nav-text" style={!props.themez ? styles[0].black : styles[0].white }> Signin </Navbar.Text>
                  </Link>
                  </>
                  }

                  

                  

               
               
                  <IconButton sx={{ ml: 1 }} onClick={props.onThemeChange}  elevation={0} disableRipple  style={{ backgroundColor: 'transparent' }}>
        {!props.themez ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
     

        
              
            
                 
        
        
      </Nav>
    </Navbar.Collapse>
 
</Navbar>
        
        </Paper>
    )
}

export default Header
