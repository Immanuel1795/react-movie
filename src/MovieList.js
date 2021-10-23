
// import movieData from "./movie";
import Card from "./Card";
import { useContext, useEffect, useState } from "react";
import ThemeContext from "./theme";
// import { updateStoredMovies } from "./getFromStorage";


import swal from "sweetalert";





function MovieList() {

    
//   const [movies, setMovies] = useState(movieData);

const [movies, setMovies] = useState([]);



const getMovies = ()=>{
  fetch("https://6173de3a110a740017223189.mockapi.io/movies")
  .then(data => data.json())
  .then((movies)=>setMovies(movies));
}

useEffect(getMovies, [])



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
        // setMovies((prevMovie) => {  

        //     updateStoredMovies(
        //          prevMovie.filter((x,index)=>x.mid !== id)
        //     )
         
        //   return prevMovie.filter((x, index) => {
        //     return x.mid !== id;
        //   });
        // });

        fetch("https://6173de3a110a740017223189.mockapi.io/movies/" + id,{
          method: "DELETE"
        })
        .then((data)=>data.json())
        .then((data)=>getMovies())
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
              .map((movie) => {
                
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
