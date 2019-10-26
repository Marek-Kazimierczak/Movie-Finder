import React from "react";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import "./Form.scss";
import AutocompleteList from "../AutocompleteList";

const Form = () => {
  return (
    <form action="" className="search-bar__form">
      <Input />
      <Button />
      <AutocompleteList />
    </form>
  );
};

export default Form;
