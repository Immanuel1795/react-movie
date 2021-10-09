import React from "react";
import { useState } from "react";

function AddMovie(props) {
  const [addMovie, setAddMovie] = useState({
    title: "",
    plot: "",
    image_url: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    

    setAddMovie((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function submitMovie(event) {
    props.onAdd(addMovie);
    setAddMovie({
      title: "",
      plot: "",
      image_url: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <div class="mb-3">
          <label for="mname" class="form-label">
            Movie Name
          </label>
          <input
            type="text"
            class="form-control"
            name="title"
            value={addMovie.title}
            onChange={handleChange}
          />
        </div>
        <div class="mb-3">
          <label for="murl" class="form-label">
            Image Url
          </label>
          <input
            type="text"
            class="form-control"
            name="image_url"
            value={addMovie.image_url}
            onChange={handleChange}
          />
        </div>
        <div class="mb-3">
          <label for="mdes" class="form-label">
            Description
          </label>
          <input
            type="text"
            class="form-control"
            name="plot"
            value={addMovie.plot}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success ml-2" onClick={submitMovie}>
          Submit
        </button>
        <button type="submit" className="btn btn-secondary  ml-2" onClick={(e)=>{
          e.preventDefault()
          props.onClose();
        }}>
          Close
        </button>
      </form>
    </div>
  );
}

export default AddMovie;
