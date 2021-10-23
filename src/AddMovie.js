import React, { useContext } from "react";
import { useState } from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
import swal from "sweetalert";
// import { updateStoredMovies } from "./getFromStorage";
import {  useHistory } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ThemeContext from "./theme";


function AddMovie() {
  const history = useHistory();
  const theme  = useContext(ThemeContext)

  function onAdd(newMov) {
   
    swal({
      title: "Movie has been added successfully",
      text: "You clicked the button!",
      icon: "success",
      button: "Aww yiss!",
    });
    // setMovies((prevMovie) => {
    //   // console.log({...newMov, id: movies.length+1})
    //   updateStoredMovies([...prevMovie, {...newMov, mid: movies.length}])
    //   return [...prevMovie, {...newMov, mid: movies.length}];
    // });

    fetch("https://6173de3a110a740017223189.mockapi.io/movies/",{
      method: "POST",
      body: JSON.stringify(newMov),
      headers: {"Content-type": "application/json"},
    })
    .then(data=>data.json())
    .then(data=>history.push(`/movies`))

    
  }

  
  const [addMovie, setAddMovie] = useState({
    title: "",
    plot: "",
    image_url: "",
    trailer: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    

    setAddMovie((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function submitMovie(event) {
    onAdd(addMovie);
    setAddMovie({
      title: "",
      plot: "",
      image_url: "",
     trailer: "",
    });
    event.preventDefault();
  }

  return (
    <div className="formz" style={theme}>
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
            value={addMovie.title}
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
            value={addMovie.image_url}
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
            value={addMovie.plot}
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
            value={addMovie.trailer}
            onChange={handleChange}
          />
        </div>

        {/* <div class="mb-3">
        <TextField className="formText" fullWidth label="Description" id="fullWidth"  name="plot" value={addMovie.plot}  onChange={handleChange} color="warning" />
        </div> */}
      
       
       

        <Button variant="contained" endIcon={<AddIcon /> }  onClick={submitMovie}>
  Add
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
  );
}

export default AddMovie;
