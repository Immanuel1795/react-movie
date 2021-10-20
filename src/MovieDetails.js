import React, { useContext } from 'react'
import { useParams } from 'react-router'
import Button from "@mui/material/Button";
import {  useHistory } from 'react-router-dom'
import { getStorage } from "./getFromStorage";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ThemeContext from "./theme";

function MovieDetails() {

    const {id} = useParams();
    const history = useHistory();
    // const movie = getStorage("movies")[id]
    const theme  = useContext(ThemeContext)

    
    const movie = getStorage("movies").filter(mov=> +mov.mid === +id);
    
   
    
    return (
        <div className="mov-trailer" style={theme}>

           
            <iframe width="100%" height="440" src={movie[0].trailer} title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h5>{movie[0].plot}</h5>
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
