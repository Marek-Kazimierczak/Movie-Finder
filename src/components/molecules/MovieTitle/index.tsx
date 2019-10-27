import React from "react";
import { useSelector } from "react-redux";
import Article from "../../atoms/Article";
import Heading from "../../atoms/Heading";

const MovieTitle = () => {
  const movie = useSelector((state: any) => state.activeMovie);

  return (
    <Article>
      <Heading main text={movie ? movie.title : ""} />
    </Article>
  );
};

export default MovieTitle;
