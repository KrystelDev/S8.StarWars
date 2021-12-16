import React, { Fragment } from "react";
import Footer from "./components/Footer";
import Routes from "./applicacion/routes";

function App() {
  const currantYear = new Date().getFullYear();

  return (
    <Fragment>
      <Routes />
      <Footer currantYear={currantYear} />
    </Fragment>
  );
}

export default App;
