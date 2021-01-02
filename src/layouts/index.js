import React, { Fragment } from "react";
import Contact from "./Contact";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Contact />
    </Fragment>
  );
};

export default Layout;
