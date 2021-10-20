
import movieData from "./movie";
import Card from "./Card";
import { useContext, useState } from "react";
import ThemeContext from "./theme";
import { updateStoredMovies } from "./getFromStorage";


import swal from "sweetalert";



updateStoredMovies(movieData)

function MovieList({movies, setMovies}) {

    
//   const [movies, setMovies] = useState(movieData);

  const [searchTerm, setSearchTerm] = useState("");
  
  const theme  = useContext(ThemeContext)
 
  

  function deleteMov(id) {
    swal({
      title: "Are you sure?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Movie has been removed successfully", {
          icon: "success",
        });
        setMovies((prevMovie) => {  

            updateStoredMovies(
                 prevMovie.filter((x,index)=>x.mid !== id)
            )
         
          return prevMovie.filter((x, index) => {
            return x.mid !== id;
          });
        });
      }
    });
  }

  

  

  return (
    
    <div>
      <div className="container-fluid" style={theme}>

      
    

      

        <div className="search-section">
          <input
            type="text"
            placeholder="Search for a movie"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />


        </div>

        

        <div className="card-section">
          <div class="row">
        
            {movies
              .filter((mov) =>
                mov.title
                  .toLocaleLowerCase()
                  .includes(searchTerm.toLocaleLowerCase())
              )
              .map((movie, index) => {
                
                return (
                  <Card
                    movieName={movie.title}
                    movieDes={movie.plot}
                    movieImg={movie.image_url}
                    onDelete={deleteMov}
                    id={movie.mid}
                    theme={theme}
                    
                    // id={index}
                   

                  />
                );
              })}
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default MovieList;
