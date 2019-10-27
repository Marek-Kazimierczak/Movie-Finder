import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Main from "../../atoms/Main";
import Section from "../../atoms/Section";
import Image from "../../atoms/Image";
import Heading from "../../atoms/Heading";
import Paragraph from "../../atoms/Paragraph";
import MovieTitle from "../../molecules/MovieTitle";
import MovieOverview from "../../molecules/MovieOverview";
import MovieGenre from "../../molecules/MovieGenre";
import MovieRating from "../../molecules/MovieRating";
import "./MovieBox.scss";

const MovieBox = () => {
  const errorMessage = useSelector((state: any) => state.errorMessage);
  const movie = useSelector((state: any) => state.activeMovie);

  const welcomeMessage =
    "Please, use the search bar to find the details of the movie you looking for. :)";

  return (
    <Main
      className={`movie-box ${
        errorMessage || !movie ? "movie-box--message" : ""
      }`}
    >
      {errorMessage ? (
        <Heading error text={errorMessage} />
      ) : !errorMessage && !movie ? (
        <>
          <Heading text="Welcome!" />
          <Paragraph text={welcomeMessage} />
        </>
      ) : (
        <>
          <Section className="movie-box__image-wrapper">
            <Image />
          </Section>
          <Section className="movie-box__details">
            <MovieTitle />
            <MovieOverview />
            <MovieGenre />
            <MovieRating />
          </Section>
        </>
      )}
    </Main>
  );
};

export default MovieBox;
