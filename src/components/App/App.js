import React from "react";

import Header from "../Header/Header";
import styles from "./App.module.scss";
import Main from "../Main/Main";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <Main />
      </main>
    </div>
  );
}

export default App;