import React, { useState, useEffect} from 'react'
import Button from "@mui/material/Button";
import { useParams } from 'react-router'
import {  useHistory } from 'react-router-dom'
import DoneIcon from '@mui/icons-material/Done';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import swal from "sweetalert";





// import { getStorage, updateStoredMovies } from "./getFromStorage";



import Box from '@mui/material/Box';

function UpdateMovie() {

  const history = useHistory();
  const {id} = useParams();


  

  const getMovies = ()=>{
    fetch("https://6173de3a110a740017223189.mockapi.io/movies/" + id)
    .then(data => data.json())
    .then((movies)=>{
      setUpdateMovie({
        title: movies.title,
        plot: movies.plot,
        image_url:movies.image_url,
        trailer: movies.trailer
       
      })
    });
  }
  
  
  
   

  // let movie = getStorage("movies").filter(mov=> +mov.mid === +id);
  
  const [updateMovie, setUpdateMovie] = useState({
    title: "",
    plot: "",
    image_url:"",
    trailer: ""
   
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

  useEffect(getMovies, [])
  function updateMovies(event) {
   


  //  const updatedData = getStorage("movies").map(x=>{
  //   if (+x.mid === +id){
  //     return {...x,
  //     title: updateMovie.title,
  //     plot: updateMovie.plot,
  //     image_url:updateMovie.image_url, 
  //     trailer: updateMovie.trailer
  //   }
  //   }
    
  //   return x;
  //  })
  //  setMovies(updatedData)
  // updateStoredMovies( updatedData);
 


  // let updatedMov = [...movies]
  // updatedMov[id] = updateMovie
  // console.log(updatedMov)
  // setMovies(updatedMov)
  // updateStoredMovies( updatedMov );
  fetch("https://6173de3a110a740017223189.mockapi.io/movies/" + id,{
    method: "PUT",
    body: JSON.stringify(updateMovie),
    headers: {"Content-type": "application/json"},
  })
  .then(data=>data.json())
  .then(data=>{
    swal({
      title: "Movie has been updated successfully",
      icon: "success",
      button: "Aww yiss!",
    });
    history.push(`/movies`)})

  


    setUpdateMovie({
      title: "",
      plot: "",
      image_url: "",
      trailer:""
    });
    event.preventDefault();
  }




  return (
   
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
      
       
       

        <Button variant="contained" endIcon={<DoneIcon /> } onClick={updateMovies}>
  Update
</Button>

        <Button
           startIcon={<ArrowBackIosIcon />}
            variant="contained"
            className="mt-auto ml-2"
            color="primary"
            onClick={()=>history.goBack()}
          >
            Back
          </Button>
       
       

       


</Box> 
      </form>
    

     
    </div>
      
   
  )
}

export default UpdateMovie
