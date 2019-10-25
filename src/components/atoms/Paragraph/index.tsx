import React from "react";

import "./Paragraph.scss";

interface Props {
  text: string;
}

const Paragraph = (props: Props) => {
  return <p className="movie-box__paragraph">{props.text}</p>;
};

export default Paragraph;
