import React from "react";

import "./Input.scss";

interface Props {
  onChange: (value: string) => void;
  value: string;
}

const Input = (props: Props) => {
  return (
    <input
      value={props.value}
      placeholder="Search a movie..."
      type="text"
      className="search-bar__input"
      onChange={e => props.onChange(e.target.value)}
    />
  );
};

export default Input;
