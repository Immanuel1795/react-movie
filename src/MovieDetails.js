import React from 'react'
import { useParams } from 'react-router'
import Button from "@mui/material/Button";
import {  useHistory } from 'react-router-dom'
import { getStorage } from "./getFromStorage";

function MovieDetails() {

    const {id} = useParams();
    const history = useHistory();
    // const movie = getStorage("movies")[id]

    
    const movie = getStorage("movies").filter(mov=> +mov.mid === +id);
    
   
    
    return (
        <div>

            <h1>{movie[0].title}</h1>
            <iframe width="100%" height="480" src={movie[0].trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h4>{movie[0].plot}</h4>
            <Button
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
