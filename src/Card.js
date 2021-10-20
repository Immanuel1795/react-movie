import React, { useState } from "react";
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


function Card(props) {
  const [showDes, setShowDes] = useState(true);

  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);

  const history = useHistory();

  function updateMov() {
    history.push(`/update_movie/${props.id}`);
  }
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-1" >
      <div className="card " style={{...props.theme, border:props.theme ? "0.1px solid white": null}}>
        <img
          src={props.movieImg}
          className="card-img-top img-fluid"
          alt={props.movieName}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">
            {props.movieName}
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
          </h5>

          {props.movieDes.length > 55 ? (
            <p className="card-text">
              {" "}
              {showDes ? props.movieDes.slice(0, 55) : props.movieDes}{" "}
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
            </p>
          ) : (
            <p className="card-text"> {props.movieDes}</p>
          )}

          <div className=" d-flex flex-row justify-content-center">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
