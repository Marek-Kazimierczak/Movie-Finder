import React from "react";

import "./MovieBox.scss";
import Section from "../../atoms/Section";
import Image from "../../atoms/Image";
import MovieTitle from "../../molecules/MovieTitle";
import MovieOverview from "../../molecules/MovieOverview";
import MovieGenre from "../../molecules/MovieGenre";
import MovieRating from "../../molecules/MovieRating";
import Spinner from "../../atoms/Spinner";

const MovieBox = () => {
  return (
    <main className="movie-box">
      <Section className="movie-box__image-wrapper">
        <Image />
      </Section>
      <Section className="movie-box__details">
        <MovieTitle />
        <MovieOverview />
        <MovieGenre />
        <MovieRating />
      </Section>
      <Spinner overlay />
    </main>
  );
};

export default MovieBox;
