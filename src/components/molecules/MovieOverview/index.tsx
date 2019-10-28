import React from "react";
import { useSelector } from "react-redux";
import Article from "../../atoms/Article";
import Heading from "../../atoms/Heading";
import Paragraph from "../../atoms/Paragraph";

const MovieOverview = () => {
  const movie = useSelector((state: any) => state.activeMovie);

  return (
    <Article>
      <Heading text="Summary" />
      <Paragraph text={movie.overview ? movie.overview : "No description."} />
    </Article>
  );
};

export default MovieOverview;
