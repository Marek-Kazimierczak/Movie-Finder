import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Article from "../../atoms/Article";
import Heading from "../../atoms/Heading";
import Paragraph from "../../atoms/Paragraph";

const MovieGenre = () => {
  const [genreList, setGenreList] = useState("");

  const movie = useSelector((state: any) => state.activeMovie);
  const genres = useSelector((state: any) => state.genres);

  useEffect(() => {
    const currentGenresObjects = genres.filter(
      (gen: any) => movie.genre_ids.indexOf(gen.id) > -1
    );

    const genreNames = currentGenresObjects.map(
      (gen: any, idx: number) =>
        `${gen.name}${idx < currentGenresObjects.length - 1 ? ", " : ""}`
    );

    setGenreList(genreNames.length ? genreNames : "Unknown");
  }, []);

  return (
    <Article>
      <Heading text="Genre" />
      <Paragraph text={genreList} />
    </Article>
  );
};

export default MovieGenre;
