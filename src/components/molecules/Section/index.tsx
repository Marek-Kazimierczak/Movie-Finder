import React from "react";
import "./Section.scss";

interface Props {
  children: React.ReactNode;
}

const Section = (props: Props) => {
  return <section className="movie-box__section">{props.children}</section>;
};

export default Section;
