import React from "react";
import Article from "../../atoms/Article";
import Heading from "../../atoms/Heading";
import RatingBar from "../RatingBar";

const MovieGenre = () => {
  return (
    <Article>
      <Heading text="Rating" />
      <RatingBar />
    </Article>
  );
};

export default MovieGenre;
