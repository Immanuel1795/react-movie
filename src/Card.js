import React, { useState } from "react";
import Button from "@mui/material/Button";

function Card(props) {
  const [showDes, setShowDes] = useState(true);

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 ">
      <div className="card">
        <img
          src={props.movieImg}
          className="card-img-top img-fluid"
          alt={props.movieName}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{props.movieName}</h5>

          {props.movieDes.length > 98 ? (
            <p className="card-text">
              {" "}
              {showDes ? props.movieDes.slice(0, 98) : props.movieDes}{" "}
              <span
                className="des-read"
                onClick={() => {
                  setShowDes(!showDes);
                }}
              >
                {showDes ? "Read More" : "Read Less"}
              </span>
            </p>
          ) : (
            <p className="card-text"> {props.movieDes}</p>
          )}

          <p className="card-text"> </p>

          <Button
            variant="contained"
            className="mt-auto"
            color="error"
            onClick={() => {
              props.onDelete(props.id);
            }}
          >
            Delete movie
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Card;
