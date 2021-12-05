import React from 'react'
import { useState } from "react";
import { useReducer } from "react";


const initialState = {
    items: ["crimson", "orange", "skyblue"]
}

const reducer = (state, action) => {}

function HHH() {

    const [color, setColor] = useState("");

    const [colors, setColors] = useState(["crimson", "orange", "skyblue"]); 

    const [state, dispatch] = useReducer(reducer, initialState);

    


    const styles = {
      backgroundColor: color,
      fontSize: "1.5rem",
      fontWeight: "bold",
      margin: "10px 0"
    };
    return (
        
      <div>
     
        <input
          style={styles}
          placeholder="Enter a color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button
          onClick={() => setColors([...colors, color])}
          className="btn btn-primary m-2"
        >
          Add Color
        </button>
  
        {colors.map((clr, index) => {
          console.log(clr)
          return <ColorBox color={clr} key={index} />;
        })}
      </div>
    );
}

function ColorBox({ color }) {
  console.log(color)
    const styles = {
      backgroundColor: color,
      height: "100px",
      width: "150px"
    };
  
    return <div style={styles}></div>;
  }
  

export default HHH


async function  getMovies() {
  fetch(`http://localhost:9000/movies`, {
    headers: {
      'x-auth-token': localStorage.getItem('token')
    }
  })
    .then((data) => data.json())
    .then((movies) => setMovies(movies));
};



useEffect(()=>{
  const token  = localStorage.getItem('token')
  if(token){
   getMovies();
  } else {
    localStorage.removeItem('token');
    history.push('/users/login')
  }
}, [])
