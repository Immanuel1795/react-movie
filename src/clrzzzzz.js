import React from 'react'
import { useState } from "react";
import { useReducer } from "react";


const initialState = {
    items: ["crimson", "orange", "skyblue"]
}

const reducer = (state, action) => {}

function ColorGame() {

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
          return <ColorBox color={clr} key={index} />;
        })}
      </div>
    );
}

function ColorBox({ color }) {
    const styles = {
      backgroundColor: color,
      height: "100px",
      width: "150px"
    };
  
    return <div style={styles}></div>;
  }
  

export default ColorGame
