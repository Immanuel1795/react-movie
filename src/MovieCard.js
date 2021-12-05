import React, { useState } from 'react'
import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
// import DeleteIcon from '@mui/icons-material/Delete';
import { useHistory } from "react-router-dom";
import DetailsIcon from "@mui/icons-material/Details";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import BasicRating from './BasicRating';
import swal from "sweetalert";
function MovieCard(props) {

    const [showDes, setShowDes] = useState(true);

  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);

  const history = useHistory();

  function updateMov() {
    const token  = localStorage.getItem('token')
      if(token){
        history.push(`/update_movie/${props.id}`);
      } else {
        swal("Login to Update Movie", "Try again", "error");
        localStorage.removeItem('token');
        history.push('/users/login')
      }
   
  }

  function deleteMovies(){
   
      const token  = localStorage.getItem('token')
      if(token){
        props.onDelete(props.id)
      } else {
        swal("Login to Delete Movie", "Try again", "error");
        localStorage.removeItem('token');
        history.push('/users/login')
      }
    
  }

    return (
        <Grid item lg={3} md={4} sm={6} container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        >
            <Card sx={{ maxWidth: 345, margin:"7px"}}>
      <CardMedia
        component="img"
        height="250"
        image={props.movieImg}
        alt={props.movieName}
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div"  sx={{ fontFamily: 'Bebas Neue',  fontSize: "28px"}} color="text.secondary">
        {props.movieName} 

       
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <BasicRating rating = {props.rating} id={props.id} title={props.title} plot={props.plot} image_url={props.image_url} trailer={props.trailer} />
        <div >
        <IconButton
              onClick={() => {
                setLike(like + 1);
              }}
              aria-label="like"
              color="error"
            >
              <Badge badgeContent={like} color="error">
                <ThumbUpAltIcon />
              </Badge>
            </IconButton>

            <IconButton
              onClick={() => setDisLike(disLike + 1)}
              aria-label="like"
              color="error"
            >
              <Badge badgeContent={disLike} color="warning">
                <ThumbDownAltIcon />
              </Badge>
            </IconButton>
            </div>
            </div>
        </Typography>
        
        <Typography variant="body2" color="text.secondary"sx={{ fontFamily: 'Comfortaa',  fontSize: "large"}}>
        {showDes ? `${props.movieDes.slice(0, 45)} ...` : props.movieDes}
              <span
                className="des-read"
                onClick={() => {
                  setShowDes(!showDes);
                }}
              >
                {showDes ? (
                  <IconButton aria-label="expandmore"  color="warning">
                    <ExpandMoreIcon fontSize="inherit" size="large"/>
                  </IconButton>
                ) : (
                  <IconButton aria-label="expandless"  color="warning">
                    <ExpandLessIcon fontSize="inherit" size="large"/>
                  </IconButton>
                )}
              </span>
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center'}}>

      
            <Button
           startIcon={<DetailsIcon />}
            variant="contained"
            className="mt-auto ml-2"
            color="primary"
            onClick={() => history.push(`/movies/${props.id}`)}
          >
            Info
          </Button>
            

            

            <Button
           startIcon={<EditIcon />}
            variant="contained"
            className="mt-auto ml-2"
            color="warning"
            onClick={updateMov}
          >
            Edit
          </Button>

              
            <Button
           startIcon={<DeleteIcon />}
            variant="contained"
            className="mt-auto ml-2"
            color="error"
            onClick={deleteMovies}
            // onClick={() => {
            //     props.onDelete(props.id);
            //   }}
          >
            Delete
          </Button>
      </CardActions>
    </Card>
        </Grid>
    )
}

export default MovieCard
