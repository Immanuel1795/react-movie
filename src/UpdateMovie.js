import React, { useState, useEffect} from 'react'
import Button from "@mui/material/Button";
import { useParams } from 'react-router'
import {  useHistory } from 'react-router-dom'
import DoneIcon from '@mui/icons-material/Done';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {useFormik}  from 'formik';
import * as yup from 'yup';
import swal from "sweetalert";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';





const updateMovieValidationSchema  =  yup.object({
  title: yup.string().max(20, "Provide a smaller title 😁").required("The movie will definitely have a name 😉"),
  plot: yup.string().min(60, "Provide a bigger description 😁").required("Feel free to enter your own story 😜"),
  image_url: yup.string().matches(/https?:\/\/w{0,3}\w*?\.(\w*?\.)?\w{2,3}\S*|www\.(\w*?\.)?\w*?\.\w{2,3}\S*|(\w*?\.)?\w*?\.\w{2,3}[\/\?]\S*/, "Invalid Url🙅").required("Think of a adding a pic 😜"),
  trailer: yup.string().matches(/https?:\/\/w{0,3}\w*?\.(\w*?\.)?\w{2,3}\S*|www\.(\w*?\.)?\w*?\.\w{2,3}\S*|(\w*?\.)?\w*?\.\w{2,3}[\/\?]\S*/, "Invalid Url 🙅‍♂️").required("Why not give it a trailer 😜")
})

function UpdateMovie() {

  const history = useHistory();
  const {id} = useParams();
  
  const [updateMovie, setUpdateMovie] = useState({
    title: "",
    plot: "",
    image_url:"",
    trailer: ""
   
  });

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
  

    const formik = useFormik({
      initialValues: updateMovie,
    validationSchema:updateMovieValidationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values)
      updateMovies(values)
    }

})
 
useEffect(getMovies, [])


  function updateMovies(updateMovie) {
   
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
  }




  return (
   
      <div className="formz">
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
        helperText={formik.touched.title && formik.errors.title}

        />     
        </div>

        <div class="mb-3">
        <TextField 
        className="formText" 
        fullWidth label="Movie Poster" 
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
        helperText={ formik.touched.plot && formik.errors.plot}

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
        helperText={ formik.touched.trailer && formik.errors.trailer}

        />     
        </div>     
       

        <Button type="submit" variant="contained" endIcon={<DoneIcon /> }>
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
