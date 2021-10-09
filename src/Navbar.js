import React from "react";
import Button from '@mui/material/Button';

function Navbar(props) {
  return (
    <div>
      <nav className="navbar ">
        <i><h1>Movies</h1></i>
        
        <Button variant="contained" color="success" onClick={()=>{props.onDisplay()}}>Add Movie</Button>
      </nav>
    </div>
  );
}

export default Navbar;
