import React from 'react'
import { useReducer } from "react";


const initialState =
  {initialItems: ["crimson", "orange", "skyblue"],
  items:"" 
}
  
 


const reducer = (state, action) => {
  switch(action.type){
    case "inputchange": {
      
      return {...state, items: action.payload}
    }

    case "addcolor":{
      
      return {...state, initialItems: [...state.initialItems, action.payload]}
    }

    default:
      return state;
    
    
  }
  
}

function ColorGame() {

    const [state, dispatch] = useReducer(reducer, initialState);

   
  


    const styles = {
      backgroundColor: state.items,
      fontSize: "1.5rem",
      fontWeight: "bold",
      margin: "10px 0"
    };
    return (
        
      <div>
     
        <input
         
          style={styles}
          placeholder="Enter a color"
          value={state.items}
          onChange={(e)=>dispatch({type: "inputchange", payload: e.target.value})}
        />
        <button
         onClick={(e)=>dispatch({type: "addcolor", payload: state.items})}
          className="btn btn-primary m-2"
        >
          Add Color
        </button>

  
        {state.initialItems.map((clr, index) => {
        
          return <ColorBox color={clr} key={index} />;
        })}
      </div>
    );
}

function ColorBox({  color}) {
    const styles = {
      backgroundColor:color ,
      height: "100px",
      width: "150px"
    };
  
    return <div style={styles}></div>;
  }
  

export default ColorGame
