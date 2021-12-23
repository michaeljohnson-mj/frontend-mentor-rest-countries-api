import { Fragment } from "react";
import "./App.css";
import Countries from "./components/countries/Countries";
import Header from "./components/header/Header";

function App() {
  return (
    <Fragment>
      <Header />
      <Countries />
    </Fragment>
  );
}

export default App;
