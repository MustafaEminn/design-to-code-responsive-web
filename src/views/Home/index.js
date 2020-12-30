import React, { Fragment } from "react";
import Header from "../../layouts/Header";
import Main1 from "./Main1";
import Main2 from "./Main2";
import Main3 from "./Main3";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Main1 />
      <Main2 />
      <Main3 />
    </Fragment>
  );
};

export default Home;
