import React, { useState, useEffect } from "react";
import RatingStar from "../../atoms/RatingStar";

import "./RatingBar.scss";

interface Props {
  rating: number;
}

const RatingBar = (props: Props) => {
  const [activeRate, setActiveRate] = useState(0);
  const [halfRate, setHalfRate] = useState(false);
  const [rating, setRating] = useState([]);

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
    setActiveRate(Math.round(props.rating));

    const isHalfRatingUnit =
      ((Math.ceil(props.rating * 2) / 2).toFixed(1) as any) % 1 === 0.5;

    isHalfRatingUnit ? setHalfRate(true) : setHalfRate(false);
  }, [props.rating]);

  useEffect(() => {
    generateRatingValues();
  }, [activeRate]);

  const ratingUnits = rating.map((rate: string, index) => (
    <RatingStar key={index} ratingStar={rate} />
  ));

  return <div className="movie-box__rating-bar">{ratingUnits}</div>;
};

export default RatingBar;
