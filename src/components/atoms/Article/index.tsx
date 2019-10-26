import React from "react";
import "./Article.scss";

interface Props {
  children: React.ReactNode;
}

const Article = (props: Props) => {
  return <article className="movie-box__article">{props.children}</article>;
};

export default Article;
