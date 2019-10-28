import React from "react";
import ReactSVG from "react-svg";
import "./RatingStar.scss";

interface Props {
  ratingStar: string;
}

const RatingStar = (props: Props) => {
  return (
    <ReactSVG
      className="movie-box__rating-star"
      src={`/assets/icons/${props.ratingStar}.svg`}
    />
  );
};

export default RatingStar;
