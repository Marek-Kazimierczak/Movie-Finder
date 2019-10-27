import React from "react";
import { useSelector } from "react-redux";
import Main from "../../atoms/Main";
import Heading from "../../atoms/Heading";

const ErrorMessageBox = () => {
  const errorMessage = useSelector((state: any) => state.errorMessage);
  return (
    <Main className="error-box">
      <Heading error text={errorMessage} />
    </Main>
  );
};

export default ErrorMessageBox;
