import React, { useState} from 'react'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import apiUrl from "./globalConstant"


export default function BasicRating({id, title, plot, image_url, trailer, rating}) {
  const [value, setValue] = useState(rating);
 



  console.log(rating)

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
     
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          fetch(`${apiUrl}/movies/${id}`,{
    method: "PUT",
    body: JSON.stringify({
    title:title,
    plot: plot,
    image_url:image_url,
    trailer: trailer,
    rating: newValue
   
  }),
    headers: {"Content-type": "application/json"},
  })
  .then(data=>data.json())
  
          
        }}
      />

    </Box>
  );
}