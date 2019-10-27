import React from "react";

import "./Heading.scss";

interface Props {
  text: string;
  main?: boolean;
  error?: boolean;
}

const Heading = (props: Props) => {
  return props.main || props.error ? (
    <h1
      className={`movie-box__heading ${
        props.main ? "movie-box__heading--main" : "movie-box__heading--error"
      }`}
    >
      {props.text}
    </h1>
  ) : (
    <h2 className="movie-box__heading">{props.text}</h2>
  );
};

export default Heading;
