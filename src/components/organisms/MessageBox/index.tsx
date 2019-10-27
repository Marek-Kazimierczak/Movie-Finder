import React from "react";
import { useSelector } from "react-redux";
import Main from "../../atoms/Main";
import Heading from "../../atoms/Heading";

import "./MessageBox.scss";
import Paragraph from "../../atoms/Paragraph";

const MessageBox = () => {
  const errorMessage = useSelector((state: any) => state.errorMessage);

  const welcomeMessage =
    "Please, use the search bar to find the details of the movie you looking for. :)";

  return (
    <Main className="error-box">
      {errorMessage ? (
        <Heading error text={errorMessage} />
      ) : (
        <>
          <Heading text="Welcome!" />
          <Paragraph text={welcomeMessage} />
        </>
      )}
    </Main>
  );
};

export default MessageBox;
