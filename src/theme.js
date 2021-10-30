import React from 'react';




export const themes =[{
  light: {
    mode: 'light', 
    backgroundImage: "url(https://www.transparenttextures.com/patterns/brick-wall.png)"
  },
  dark: {
    mode: 'dark',
    backgroundImage: "url(https://www.transparenttextures.com/patterns/brick-wall.png)"
 } }]

 const ThemeContext  = React.createContext(null);
 export default ThemeContext;

