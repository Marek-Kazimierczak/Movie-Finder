import React from "react";

interface Props {
  children: React.ReactNode;
}

const Article = (props: Props) => {
  return <article className="movie-box__article">{props.children}</article>;
};

export default Article;
