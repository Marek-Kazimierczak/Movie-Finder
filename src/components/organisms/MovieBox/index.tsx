import React from "react";
import "./MovieBox.scss";

interface Props {
  children: React.ReactNode;
}

const MovieBox = (props: Props) => {
  return <header className="movie-box">{props.children}</header>;
};

export default MovieBox;
