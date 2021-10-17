import React, { useState } from 'react'
import Button from "@mui/material/Button";
import { useParams } from 'react-router'
import {  useHistory } from 'react-router-dom'


import { getStorage, updateStoredMovies } from "./getFromStorage";

import Box from '@mui/material/Box';

function UpdateMovie() {

  const history = useHistory();
  const {id} = useParams();
  
  
  

  let movie = getStorage("movies").filter(mov=> +mov.mid === +id);
 
  const [updateMovie, setUpdateMovie] = useState({
    title: movie[0].title,
    plot: movie[0].plot,
    image_url: movie[0].image_url,
    trailer: movie[0].trailer
   
  });

  function handleChange(event) {
    const { name, value } = event.target;
    

    setUpdateMovie((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function updateMovies(event) {
   
   
  //  updateStoredMovies( ...movie );

   const updatedData = getStorage("movies").map(x=>{
    if (+x.mid === +id){
      return {...x,
      title: updateMovie.title,
      plot: updateMovie.plot,
      image_url:updateMovie.image_url, 
      trailer: updateMovie.trailer
    }
    }
    
    return x;
   })

   console.log(updatedData)

   updateStoredMovies( updatedData);


    setUpdateMovie({
      title: "",
      plot: "",
      image_url: "",
    });
    event.preventDefault();
  }


  return (
    <div>
      <div className="formz">
      <form>
      <Box >

      
        <div class="mb-3">
          <label for="mname" class="form-label">
            Movie Name
          </label>
          <input
            type="text"
            class="form-control"
            name="title"
            value={updateMovie.title}
            onChange={handleChange}
          />
        </div>

        

        {/* <div class="mb-3">
        <TextField className="formText" fullWidth label="Movie Name" id="fullWidth"  name="title" value={addMovie.title}  onChange={handleChange} color="warning"/>
        </div> */}
        <div class="mb-3">
          <label for="murl" class="form-label">
            Image Url
          </label>
          <input
            type="text"
            class="form-control"
            name="image_url"
            value={updateMovie.image_url}
            onChange={handleChange}
          />
        </div>
        {/* <div class="mb-3">
        <TextField className="formText" fullWidth label="Image Url" id="fullWidth"  name="image_url" value={addMovie.image_url}  onChange={handleChange} color="warning" />
        </div> */}
        <div class="mb-3">
          <label for="mdes" class="form-label">
            Description
          </label>
          <input
            type="text"
            class="form-control"
            name="plot"
            value={updateMovie.plot}
            onChange={handleChange}
          />
        </div>

        <div class="mb-3">
          <label for="trailer" class="form-label">
            Trailer
          </label>
          <input
            type="text"
            class="form-control"
            name="trailer"
            value={updateMovie.trailer}
            onChange={handleChange}
          />
        </div>

        {/* <div class="mb-3">
        <TextField className="formText" fullWidth label="Description" id="fullWidth"  name="plot" value={addMovie.plot}  onChange={handleChange} color="warning" />
        </div> */}
      
       
        <Button variant="outlined" color="success" className="ml-2" onClick={updateMovies}> Update</Button>

        <Button
            variant="contained"
            className="mt-auto"
            color="primary"
            onClick={()=>history.goBack()}
          >
            Back
          </Button>
       
       

       


</Box> 
      </form>
    

     
    </div>
      
    </div>
  )
}

export default UpdateMovie
