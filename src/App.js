import "./App.css";


import { useEffect, useState } from "react";

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
import Formk from "./Formk";
import ColorGame from "./ColorGame";
import Signup from "./Signup";
import Login from "./Login";








function App() {


  const [darkMode, setDarkMode] = useState(false);
 
  

  const darkTheme = createTheme({
    palette: 
      darkMode ? themes[0].light : themes[0].dark
    
  });

  function themeChanger(){
    setDarkMode(!darkMode)
  }


  const [sign, setSign] = useState(localStorage.getItem('token'));
 

   
   useEffect(()=>{
    const token  = localStorage.getItem('token')
    if(token){
      setSign(true);
    }
  }, [])
  
 
  return (
    <div>
      
       
      <Switch>
      <ThemeProvider  theme={darkTheme}>      
      <CssBaseline />
        <Header onThemeChange = {themeChanger} themez = {darkMode} sign={sign} setSign={setSign}/> 
          
        
        <Route exact path="/users/signup"><Signup/></Route>
        <Route exact path="/users/login"><Login setSign={setSign}/></Route>

        <Route exact path="/movies/:id"><MovieDetails/></Route>
        <Route exact path="/movies">< MovieList/></Route>
        <Route exact path="/update_movie/:id"><UpdateMovie /></Route>
        <Route exact path="/add_movie" ><AddMovie /></Route>
        <Route exact path="/formik"><Formk /></Route>
        <Route exact path="/color_game"><ColorGame /></Route>
        <Route exact path="/"><About /></Route>
        
      
    </ThemeProvider>
    </Switch>
      </div>
    
  );
}

export default App;
