import "./App.css";


import { useState } from "react";

import {  Switch, Route } from 'react-router-dom';
import MovieList from "./MovieList";
import About from "./About";
import MovieDetails from "./MovieDetails";
import UpdateMovie from "./UpdateMovie";
// import { getStorage } from "./getFromStorage";
import AddMovie from "./AddMovie";
import Header from "./Header";
import CssBaseline from '@mui/material/CssBaseline';




import { createTheme, ThemeProvider  } from '@mui/material/styles';
import  {themes} from "./theme";






function App() {

  


 
 




  const [darkMode, setDarkMode] = useState(false);
  console.log(themes[0].light)
  

  const darkTheme = createTheme({
    palette: 
      darkMode ? themes[0].light : themes[0].dark
    
  });

  function themeChanger(){
    setDarkMode(!darkMode)
  }
  
 
  return (
    <div>
      
       
         
      <ThemeProvider  theme={darkTheme}>
      <CssBaseline />
          <Header onThemeChange = {themeChanger} themez = {darkMode}/>
         

         
{/* 
          <ThemeProvider  theme={darkTheme}>
         
          <Navigation onThemeChange = {themeChanger} themez = {darkMode}/>
          </ThemeProvider> */}
          
      

        <Switch>
        
       

        <Route exact path="/movies/:id"><MovieDetails/></Route>
        <Route exact path="/movies">< MovieList/></Route>
        <Route exact path="/update_movie/:id"><UpdateMovie /></Route>
        <Route exact path="/add_movie" ><AddMovie /></Route>
        <Route exact path="/"><About /></Route>
        
    </Switch>
    </ThemeProvider>
      </div>
    
  );
}

export default App;
