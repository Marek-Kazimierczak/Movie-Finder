import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Main from "../../atoms/Main";
import Section from "../../atoms/Section";
import Image from "../../atoms/Image";
import MovieTitle from "../../molecules/MovieTitle";
import MovieOverview from "../../molecules/MovieOverview";
import MovieGenre from "../../molecules/MovieGenre";
import MovieRating from "../../molecules/MovieRating";
import Spinner from "../../atoms/Spinner";
import "./MovieBox.scss";

const GENRES_API_URL =
  "https://api.themoviedb.org/3/genre/movie/list?api_key=818eba3007e856a7778f192db256eb97&language=en-US";

const MovieBox = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(GENRES_API_URL)
      .then(res => res.json())
      .then(res => {
        dispatch({
          type: "GET_GENRES",
          payload: res.genres
        });
      })
      .catch(err => {
        console.log("genre error", err);
        dispatch({
          type: "SEARCH_MOVIES_FAILURE",
          error: err.status
        });
      });
  }, []);

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
