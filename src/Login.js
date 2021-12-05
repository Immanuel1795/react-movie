import React from 'react'
import {useFormik}  from 'formik';
import * as yup from 'yup';
import apiUrl from "./globalConstant"
import Button from "@mui/material/Button";
import swal from "sweetalert";
import {  useHistory } from 'react-router-dom'
import TextField from '@mui/material/TextField';


const loginValidationSchema  =  yup.object({
    username: yup.string().required('Please Enter your username'),
    password: yup.string().required('Please Enter your password'),
  })

function Login(props) {

    const history = useHistory();

    const formik = useFormik({
        initialValues: { 
        username: "",
        password: "",
    },
      validationSchema:loginValidationSchema,
      onSubmit: (values) => {
        loginUser(values)
      }
  
  })


  function loginUser(logUser) {

    

      fetch(`${apiUrl}/users/login`,{
        method: "POST",
        body: JSON.stringify(logUser),
        headers: {"Content-type": "application/json"},
      })
      .then(data=>data.json())
      .then(data=>{
          if(data.status === 404){
            console.log(data)
            swal(data.message, "Try again", "error");
           
          } else {
           localStorage.setItem('token', data.token)
           localStorage.setItem('id', data.id)
           props.setSign(true)
            swal({
              title: "Logged successfully",
              icon: "success",
              button: "ok!",
            });
            history.push(`/movies`)
          }
        
      })
  }

    return (
      <div className="wrapper">
 
  

      <div className="formz">
       <form onSubmit={formik.handleSubmit}> 
       <TextField 
           className="formText m-2" 
           fullWidth label="UserName" 
           id="username"  
           name="username" 
           value={formik.values.username}  
           onChange={formik.handleChange} 
           onBlur={formik.handleBlur}
           color="primary"
           error={formik.errors.username && formik.touched.username}
           helperText={formik.touched.username  && formik.errors.username}
   
           />     
         <TextField 
           className="formText m-2" 
           fullWidth label="Password" 
           id="password"  
           name="password" 
           value={formik.values.password}  
           onChange={formik.handleChange} 
           onBlur={formik.handleBlur}
           color="primary"
           error={formik.errors.password && formik.touched.password}
           helperText={formik.touched.password && formik.errors.password}
   
           /> 
   
    
           <Button className="m-2"  type= "submit" variant="contained" >Login</Button>
       </form>
   </div>
   
   </div>   
    )
}

export default Login
