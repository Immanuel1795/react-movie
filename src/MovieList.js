
// import movieData from "./movie";

import {useEffect, useState } from "react";

// import { updateStoredMovies } from "./getFromStorage";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';





import swal from "sweetalert";
import MovieCard from "./MovieCard";





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
  
  
 
  

  function deleteMov(id) {
    swal({
      title: "Are you sure?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        
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
        .then((data)=>{
          swal("Movie has been removed successfully", {
            icon: "success",
          });
          getMovies()})
      }

      
    });
  }

  

  

  return (
    
    < >
     

      
    

      

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
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
            {movies
              .filter((mov) =>
                mov.title
                  .toLocaleLowerCase()
                  .includes(searchTerm.toLocaleLowerCase())
              )
              .map((movie) => {
                
                return (
                  <MovieCard
                    movieName={movie.title}
                    movieDes={movie.plot}
                    movieImg={movie.image_url}
                    onDelete={deleteMov}
                    rating={movie.rating}
                    id={movie.mid}
                    trailer={movie.trailer}
                    
                    
                    // id={index}
                   

                  />
                );
              })}
          
</Grid>
              </Box>
        </div>



        
     
      
    </>
  );
}

export default MovieList;
