import "./App.css";


import { useState } from "react";

import {  Switch, Route } from 'react-router-dom';
import MovieList from "./MovieList";
import About from "./About";
import MovieDetails from "./MovieDetails";
import UpdateMovie from "./UpdateMovie";
import { getStorage } from "./getFromStorage";
import AddMovie from "./AddMovie";
import Header from "./Header";


import ThemeContext, {themes} from "./theme";





function App() {

 
  const [movies, setMovies] = useState(
    getStorage("movies")
);




const [theme, setTheme] = useState(themes[0].dark);

const themeChanger = ()=>{
  
  theme === themes[0].light ? setTheme(themes[0].dark) : setTheme(themes[0].light)
}
 
  return (
    <div>
      
       
         
        <ThemeContext.Provider value={theme}>
          <Header onThemeChange = {themeChanger}/>
          </ThemeContext.Provider>
          
          
      

        <Switch>
        <ThemeContext.Provider value={theme}>
        <Route exact path="/movies/:id"><MovieDetails /></Route>
        <Route exact path="/movies">< MovieList movies={movies} setMovies={setMovies}/></Route>
        <Route exact path="/update_movie/:id"><UpdateMovie setMovies={setMovies}/></Route>
        <Route exact path="/add_movie" ><AddMovie movies={movies} setMovies={setMovies}/></Route>
        <Route exact path="/"><About /></Route>
        </ThemeContext.Provider>
    </Switch>
      </div>
    
  );
}

export default App;
