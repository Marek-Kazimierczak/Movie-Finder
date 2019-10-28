import React from "react";

import "./Paragraph.scss";

interface Props {
  text: string;
  message?: boolean;
}

const Paragraph = (props: Props) => {
  return (
    <p
      className={`movie-box__paragraph ${
        props.message ? "movie-box__paragraph--message " : ""
      }`}
    >
      {props.text}
    </p>
  );
};

export default Paragraph;
