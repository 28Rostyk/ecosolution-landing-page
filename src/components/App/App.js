import React from "react";

import Header from "../Header/Header";
import styles from "./App.module.scss";
import Main from "../Main/Main";
import About from "../About/About";
import Electricity from "../Electricity/Electricity";
import Cases from "../Cases/Cases";
import FAQAccordion from "../FAQ/FAQAccordion ";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <Main />
        <About />
        <Electricity />
        <Cases />
        <FAQAccordion />
      </main>
    </div>
  );
}

export default App;
