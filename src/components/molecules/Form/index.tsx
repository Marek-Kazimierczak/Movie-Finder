import React from "react";
import "./Form.scss";

interface Props {
  children: React.ReactNode;
}

const Form = (props: Props) => {
  return (
    <form action="" className="search-bar__form">
      {props.children}
    </form>
  );
};

export default Form;
