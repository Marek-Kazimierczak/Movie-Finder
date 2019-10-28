import React from "react";

interface Props {
  children: React.ReactNode;
  className: string;
}

const Main = (props: Props) => {
  return <main className={props.className}>{props.children}</main>;
};

export default Main;
