import React from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import swal from "sweetalert";
// import { updateStoredMovies } from "./getFromStorage";
import {  useHistory } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {useFormik}  from 'formik';
import * as yup from 'yup';
import apiUrl from "./globalConstant"




const addMovieValidationSchema  =  yup.object({
  title: yup.string().max(20, "Provide a smaller title 😁").required("The movie will definitely have a name 😉"),
  plot: yup.string().min(60, "Provide a bigger description 😁").required("Feel free to enter your own story 😜"),
  image_url: yup.string().url("Invalid Url🙅").required("Think of a adding a pic 😜"),
  trailer: yup.string().url("Invalid Url 🙅‍♂️").required("Why not give it a trailer 😜"),
  rating: yup.number().required("Give your thoughts 😜").min(1,"OOPS, Not less than 1 😁").max(5, "OOPS, Max is 5 😁")
})



function AddMovie() {
  const history = useHistory();

  const formik = useFormik({
      initialValues: { 
      title: "",
      plot: "",
      image_url: "",
      trailer: "", 
      rating:""
  },
    validationSchema:addMovieValidationSchema,
    onSubmit: (values) => {
      submitMovie(values)
    }

})
  


  
//in case of mock api then  body: JSON.stringify(newMov),
  
  function submitMovie(newMov) {
    console.log([newMov])
    fetch(`${apiUrl}/movies`,{
      method: "POST",
      body: JSON.stringify([newMov]),
      headers: {"Content-type": "application/json"},
    })
    .then(data=>data.json())
    .then(data=>{
      swal({
        title: "Movie has been added successfully",
        icon: "success",
        button: "Aww yiss!",
      });
      history.push(`/movies`)
    })
  }

  return (
    
    
   
    <div className="formz" >
      <form onSubmit={formik.handleSubmit}>
      <Box >


      <div class="mb-3">
        <TextField 
        className="formText" 
        fullWidth label="Movie Name" 
        id="title"  
        name="title" 
        value={formik.values.title}  
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur}
        color="primary"
        error={formik.errors.title && formik.touched.title}
        helperText={formik.touched.title  && formik.errors.title}

        />     
        </div>

        <div class="mb-3">
        <TextField 
        className="formText" 
        fullWidth label="Movie Image" 
        id="image_url"  
        name="image_url" 
        value={formik.values.image_url}  
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur}
        color="primary"
        error={formik.errors.image_url && formik.touched.image_url}
        helperText={formik.touched.image_url && formik.errors.image_url}

        />     
        </div>

        <div class="mb-3">
        <TextField 
        className="formText" 
        fullWidth label="Movie Plot" 
        id="plot"  
        name="plot" 
        value={formik.values.plot}  
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur}
        color="primary"
        error={formik.errors.plot && formik.touched.plot}
        helperText={formik.touched.plot && formik.errors.plot}

        />     
        </div>

        <div class="mb-3">
        <TextField 
        className="formText" 
        fullWidth label="Movie Trailer" 
        id="trailer"  
        name="trailer" 
        value={formik.values.trailer}  
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur}
        color="primary"
        error={formik.errors.trailer && formik.touched.trailer}
        helperText={formik.touched.trailer && formik.errors.trailer}

        />     
        </div>  

        <div class="mb-3">
        <TextField 
        className="formText" 
        fullWidth label="Movie Rating" 
        id="rating"  
        name="rating" 
        value={formik.values.rating}  
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur}
        color="primary"
        error={formik.errors.rating && formik.touched.rating}
        helperText={formik.touched.rating && formik.errors.rating}

        />     
        </div>     
       

        <Button type= "submit" variant="contained" endIcon={<AddIcon /> }>
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
