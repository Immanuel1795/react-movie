
import React from 'react';

export const themes = [{
    light:{
        color: "black",
        backgroundColor: "#FFEFBA",
        backgroundImage: "url(https://www.transparenttextures.com/patterns/brick-wall.png)"
   
        
       
        
    },
    dark: {
       
        color: "white",
        backgroundColor: "black",
        backgroundImage: "url(https://www.transparenttextures.com/patterns/brick-wall.png)"
   
    }
}];

const ThemeContext  = React.createContext(null);

export default ThemeContext;

