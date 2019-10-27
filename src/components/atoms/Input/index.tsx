import React from "react";
import "./Input.scss";

interface Props {
  onChange: (value: string) => void;
  value: string;
}

const Input = (props: Props) => {
  return (
    <>
      <label className="search-bar__input-label" htmlFor="search-input" />
      <input
        autoComplete="off"
        value={props.value}
        placeholder="Search a movie..."
        type="text"
        id="search-input"
        className="search-bar__input"
        onChange={e => props.onChange(e.target.value)}
      />
    </>
  );
};

export default Input;
