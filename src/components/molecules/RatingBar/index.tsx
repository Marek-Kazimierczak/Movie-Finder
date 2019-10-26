import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import RatingStar from "../../atoms/RatingStar";

import "./RatingBar.scss";

//movie.vote_average
const RatingBar = () => {
  const [activeRate, setActiveRate] = useState(0);
  const [halfRate, setHalfRate] = useState(false);
  const [rating, setRating] = useState([]);

  const movie = useSelector((state: any) => state.activeMovie);

  const generateRatingValues = () => {
    const values: any = new Array(10).fill(null).map((rate: number, index) => {
      return index < activeRate
        ? "full-star"
        : index === activeRate && halfRate
        ? "half-star"
        : "empty-star";
    });

    setRating(values);
  };

  useEffect(() => {
    if (movie) {
      setActiveRate(Math.round(movie.vote_average));

      const isHalfRatingUnit =
        ((Math.ceil(movie.vote_average * 2) / 2).toFixed(1) as any) % 1 === 0.5;

      isHalfRatingUnit ? setHalfRate(true) : setHalfRate(false);
    }
  }, []);

  useEffect(() => {
    if (movie) {
      generateRatingValues();
    }
  }, [activeRate]);

  const ratingUnits = rating.map((rate: string, index) => (
    <RatingStar key={index} ratingStar={rate} />
  ));

  return <div className="movie-box__rating-bar">{ratingUnits}</div>;
};

export default RatingBar;
