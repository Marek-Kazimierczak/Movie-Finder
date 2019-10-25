import React from "react";

import "./Heading.scss";

interface Props {
  text: string;
  large?: boolean;
}

const Heading = (props: Props) => {
  return props.large ? (
    <h1 className="movie-box__heading">{props.text}</h1>
  ) : (
    <h2 className="movie-box__heading">{props.text}</h2>
  );
};

export default Heading;
