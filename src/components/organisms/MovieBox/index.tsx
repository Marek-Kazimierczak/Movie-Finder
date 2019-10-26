import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
  const loading = useSelector((state: any) => state.loading);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "SET_LOADING", payload: false });
    }, 3000);
  }, []);

  useEffect(() => {
    fetch(GENRES_API_URL)
      .then(res => res.json())
      .then(res => {
        dispatch({
          type: "GET_GENRES",
          payload: res.genres
        });
      })
      .catch(err =>
        dispatch({
          type: "SEARCH_MOVIES_FAILURE",
          error: err.status
        })
      );
  }, []);

  return (
    <main className="movie-box">
      {loading && <Spinner overlay />}
      <Section className="movie-box__image-wrapper">
        <Image />
      </Section>
      <Section className="movie-box__details">
        <MovieTitle />
        <MovieOverview />
        <MovieGenre />
        <MovieRating />
      </Section>
    </main>
  );
};

export default MovieBox;
