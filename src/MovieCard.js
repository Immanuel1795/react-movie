import React, { useState } from 'react'

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

function MovieCard(props) {

    const [showDes, setShowDes] = useState(true);

  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);

  const history = useHistory();

  function updateMov() {
    history.push(`/update_movie/${props.id}`);
  }
    return (
        <Grid item lg={3} md={4} sm={6} container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        >
            <Card sx={{ maxWidth: 345}}>
      <CardMedia
        component="img"
        height="250"
        image={props.movieImg}
        alt={props.movieName}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"  sx={{ fontFamily: 'Bebas Neue',  fontSize: "28px"}} color="text.secondary">
        {props.movieName} <IconButton
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
      <IconButton
              color="primary"
              aria-label="details"
              size="large"
              onClick={() => history.push(`/movies/${props.id}`)}
            >
              <DetailsIcon fontSize="inherit" />
            </IconButton>

            <IconButton
              color="warning"
              aria-label="details"
              size="large"
              onClick={updateMov}
            >
              <EditIcon fontSize="inherit" />
            </IconButton>

            <IconButton
              color="error"
              aria-label="delete"
              size="large"
              onClick={() => {
                props.onDelete(props.id);
              }}
            >
              <DeleteIcon fontSize="inherit" />
            </IconButton>
      </CardActions>
    </Card>
        </Grid>
    )
}

export default MovieCard
