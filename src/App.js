import "./App.css";



import Navbar from "./Navbar";
import {  Switch, Route } from 'react-router-dom';
import MovieList from "./MovieList";
import About from "./About";
import MovieDetails from "./MovieDetails";
import UpdateMovie from "./UpdateMovie";


function App() {

 


 
  return (
    <div>
      
        <div className="nav-section">
          <Navbar  />
        </div>

        <Switch>
        <Route path="/movies/:id"><MovieDetails /></Route>
        <Route path="/movies">< MovieList /></Route>
        <Route path="/update_movie/:id"><UpdateMovie /></Route>
        <Route path="/"><About /></Route>
        
    </Switch>
      </div>
    
  );
}

export default App;
