import React from "react";

function Card(props) {
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
          <p className="card-text">{props.movieDes}</p>
          <button
            className="btn btn-block btn-danger align-self-end mt-auto"
            onClick={() => {
              props.onDelete(props.id);
            }}
          >
            Delete Movie
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
