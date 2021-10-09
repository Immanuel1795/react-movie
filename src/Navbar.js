import React from "react";

function Navbar(props) {
  return (
    <div>
      <nav className="navbar ">
        <i><h1>Movies</h1></i>
        <button className="btn btn-success" onClick={()=>{props.onDisplay()}}>Add Movie</button>
      </nav>
    </div>
  );
}

export default Navbar;
