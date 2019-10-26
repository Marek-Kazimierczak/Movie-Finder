import React from "react";
import Article from "../../atoms/Article";
import Heading from "../../atoms/Heading";
import Paragraph from "../../atoms/Paragraph";

const description = "Action, Science Fiction, Romance";

const MovieGenre = () => {
  return (
    <Article>
      <Heading text="Genre" />
      <Paragraph text={description} />
    </Article>
  );
};

export default MovieGenre;
