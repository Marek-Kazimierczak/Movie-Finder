import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Main from "../../atoms/Main";
import Section from "../../atoms/Section";
import Image from "../../atoms/Image";
import MovieTitle from "../../molecules/MovieTitle";
import MovieOverview from "../../molecules/MovieOverview";
import MovieGenre from "../../molecules/MovieGenre";
import MovieRating from "../../molecules/MovieRating";
import "./MovieBox.scss";

const MovieBox = () => {
  return (
    <Main className="movie-box">
      <Section className="movie-box__image-wrapper">
        <Image />
      </Section>
      <Section className="movie-box__details">
        <MovieTitle />
        <MovieOverview />
        <MovieGenre />
        <MovieRating />
      </Section>
    </Main>
  );
};

export default MovieBox;
