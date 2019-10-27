import React from "react";
import { useSelector } from "react-redux";
import "./Image.scss";

const Image = () => {
  const movie = useSelector((state: any) => state.activeMovie);

  const imageSource = movie
    ? `https://image.tmdb.org/t/p/w780/${movie.poster_path}`
    : "/assets/no-poster.jpg";

  const title = movie.title ? movie.title : "poster not available";
  return (
    <div className="movie-box__image">
      <img className="movie-box__image-element" src={imageSource} alt={title} />
    </div>
  );
};

export default Image;
