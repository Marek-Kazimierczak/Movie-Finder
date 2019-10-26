import React from "react";

import "./Image.scss";

const Image = () => {
  return (
    <div className="movie-box__image">
      <img
        className="movie-box__image-element"
        src="/assets/avatar2.jpg"
        alt="movie"
      />
    </div>
  );
};

export default Image;
