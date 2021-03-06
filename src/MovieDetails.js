import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Button from "@mui/material/Button";
import {  useHistory } from 'react-router-dom'
// import { getStorage } from "./getFromStorage";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import apiUrl from "./globalConstant"



function MovieDetails() {

  const [movies, setMovies] = useState({})

    const {id} = useParams();
    const history = useHistory();
    // const movie = getStorage("movies")[id]
   

    

    
    useEffect(()=>{
      fetch(`${apiUrl}/movies/${id}`)
      .then(data => data.json())
      .then((movies)=>setMovies(movies));
    }, [id])
    
   
    
    return (
     
        <div className="mov-trailer container-fluid" >

           
            <iframe width="100%" height="440" src={movies.trailer} title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h5>{movies.plot}</h5>
            <Button
           startIcon={<ArrowBackIosIcon />}
            variant="contained"
            className="mt-auto"
            color="primary"
            onClick={()=>history.goBack()}
          >
            Back
          </Button>
        </div>
     
    )
}

export default MovieDetails
