import React from "react";
// import { Formik } from "formik";
import {useFormik}  from 'formik';
import * as yup from 'yup';


// function Formk() {
//   const validateFormikForm = (values) => {
//     console.log("validateFormikForm", values);
//     const errors = {};

//     if(values.email.length < 5 ){
//         errors.email = "Please provide a valid email address";
//     } else if (
//         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//       ) {
//         errors.email = 'Invalid email address';
//       }

//       if(values.password.length <8){
//         errors.password = "pwd length shd be greater than 8 chars";
//       } else if (values.password.length > 8){
//         errors.password = "pwd length shd be smaller than 12 chars";
//       }
//     return errors
//   };

//   return (
//     <div>
//       <Formik
//         initialValues={{ email: "", password: "" }}
//         validate={validateFormikForm}
//         onSubmit={(values) => {
//           console.log("submit", values);
//         }}
//       >
//         {(formik) => {
//           return (
//             <form onSubmit={formik.handleSubmit}>
//               <input
//                 type="email"
//                 name="email"
//                 value={formik.values.email}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//               />

//               {formik.errors.email && formik.touched.email && formik.errors.email}
//               <input
//                 type="password"
//                 name="password"
//                 value={formik.values.password}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//               />

//             {formik.errors.password && formik.touched.password && formik.errors.password}    
//               <button type="submit">Submit</button>
//             </form>
//           );
//         }}
//       </Formik>
//     </div>
//   );
// }


// function Formk() {
//     const validateFormikForm = (values) => {
//       console.log("validateFormikForm", values);
//       const errors = {};
  
//       if(values.email.length < 5 ){
//           errors.email = "Please provide a valid email address";
//       } else if (
//           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//         ) {
//           errors.email = 'Invalid email address';
//         }
  
//         if(values.password.length <8){
//           errors.password = "pwd length shd be greater than 8 chars";
//         } else if (values.password.length > 8){
//           errors.password = "pwd length shd be smaller than 12 chars";
//         }
//       return errors
//     };

//     const formik = useFormik({
//         initialValues: { email: "", password: "" },
//         validate: {validateFormikForm},
//         onSubmit: (values) => {
//           console.log("submit", values);
//         }

//     })
  
//     return (
//       <div>
    
          
           
//               <form onSubmit={formik.handleSubmit}>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formik.values.email}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                 />
  
//                 {formik.errors.email && formik.touched.email && formik.errors.email}
//                 <input
//                   type="password"
//                   name="password"
//                   value={formik.values.password}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                 />
  
//               {formik.errors.password && formik.touched.password && formik.errors.password}    
//                 <button type="submit">Submit</button>
//               </form>
           
         
       
//       </div>
//     );
//   }


const formikValidation  =  yup.object({
    email: yup.string().min(5, "Need bigger email").required("y nt gve a email").matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Pattern not matched"),
    password: yup.string().min(5, "Need bigger password").max(12, "Need smaller password").required("y nt gve a passwod")
})

function Formk() {
    

    const formik = useFormik({
        initialValues: { email: "", password: "" },
        validationSchema:formikValidation,
        onSubmit: (values) => {
          console.log("submit", values);
        }

    })
  
    return (
      <div>
    
          
           
              <form onSubmit={formik.handleSubmit}>
                <input
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
  
                {formik.errors.email && formik.touched.email && formik.errors.email}
                <input
                  type="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
  
              {formik.errors.password && formik.touched.password && formik.errors.password}    
                <button type="submit">Submit</button>
              </form>
           
         
       
      </div>
    );
  }





export default Formk;
