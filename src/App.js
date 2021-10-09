import "./App.css";
import movieData from "./movie";
import Card from "./Card";
import { useState } from "react";
import AddMovie from "./AddMovie";
import Navbar from "./Navbar";
import swal from 'sweetalert';


function App() {
  const [movies, setMovies] = useState(movieData);
  const [display, setDisplay] = useState("none");
  const [searchTerm, setSearchTerm] = useState("")


  function addMov(newMov) {
    swal({
      title: "Movie has been added successfully",
      text: "You clicked the button!",
      icon: "success",
      button: "Aww yiss!",
    });
    setMovies((prevMovie) => {
    
      return [newMov, ...prevMovie ];
    });
  }

  function deleteMov(id) {
   

      swal({
        title: "Are you sure?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
         
          swal("Movie has been removed successfully", {
            icon: "success",
            
          });
          setMovies((prevMovie) => {
          return prevMovie.filter((x, index) => {
            return index !== id;
          });
        });
        } 
     
  
      
    });
  }

  function showForm(){
    setDisplay("");
  }

  return (
    <div>
      <div className="container-fluid">

      <div className="nav-section">
        <Navbar onDisplay={showForm}/>
        </div>

        <div className="top-section"style={{display: display}}>
          <AddMovie onAdd={addMov} onClose={()=>setDisplay("none")}/>
        </div>

        <div className="search-section">
          <input type="text" placeholder="Search for a movie" onChange={(e)=>{setSearchTerm(e.target.value)}}/>
        </div>

        <div className="card-section">
        <div class="row">
          {movies.filter(mov=> mov.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
          ).map((movie, index) => {
            return (
              <Card
                movieName={movie.title}
                movieDes={movie.plot}
                movieImg={movie.image_url}
                onDelete={deleteMov}
                id={index}
              />
            );
          })}
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
