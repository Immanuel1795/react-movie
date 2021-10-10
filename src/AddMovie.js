import React from "react";
import { useState } from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function AddMovie(props) {
  const [addMovie, setAddMovie] = useState({
    title: "",
    plot: "",
    image_url: "",
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
    props.onAdd(addMovie);
    setAddMovie({
      title: "",
      plot: "",
      image_url: "",
    });
    event.preventDefault();
  }

  return (
    <div className="formz">
      <form>
      <Box >
        {/* <div class="mb-3">
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
        </div> */}

        

        <div class="mb-3">
        <TextField className="formText" fullWidth label="Movie Name" id="fullWidth"  name="title" value={addMovie.title}  onChange={handleChange} color="warning"/>
        </div>
        {/* <div class="mb-3">
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
        </div> */}
        <div class="mb-3">
        <TextField className="formText" fullWidth label="Image Url" id="fullWidth"  name="image_url" value={addMovie.image_url}  onChange={handleChange} color="warning" />
        </div>
        {/* <div class="mb-3">
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
        </div> */}

        <div class="mb-3">
        <TextField className="formText" fullWidth label="Description" id="fullWidth"  name="plot" value={addMovie.plot}  onChange={handleChange} color="warning" />
        </div>
      
        <Button variant="outlined" color="success" className="ml-2" onClick={submitMovie}> Submit</Button>

        <Button variant="outlined" color="error" className="ml-2" onClick={(e)=>{
          e.preventDefault()
          props.onClose();
        }}> Close</Button>

</Box> 
      </form>
    

     
    </div>
  );
}

export default AddMovie;
