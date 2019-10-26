import React from "react";
import Article from "../../atoms/Article";
import Heading from "../../atoms/Heading";
import Paragraph from "../../atoms/Paragraph";

const overview =
  "In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.";

const MovieOverview = () => {
  return (
    <Article>
      <Heading text="Summary" />
      <Paragraph text={overview} />
    </Article>
  );
};

export default MovieOverview;
