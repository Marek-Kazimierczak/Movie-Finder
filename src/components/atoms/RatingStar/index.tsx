import React from "react";
import ReactSVG from "react-svg";
import "./RatingStar.scss";

interface Props {
  ratingStar: string;
}

const RatingStar = (props: Props) => {
  return (
    <div className="movie-box__rating-star">
      <ReactSVG src={`/assets/icons/${props.ratingStar}.svg`} />
    </div>
  );
};

export default RatingStar;
