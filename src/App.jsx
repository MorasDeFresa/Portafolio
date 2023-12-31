/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { useLanguage } from "./hooks/useLanguage";
import IdiomButton from "./components/IdiomButton";
import ThemeButton from "./components/ThemeButton";

function App() {
  const [isDark, setIsDark] = useState(true);
  const [t, handleChangeLanguage] = useLanguage();

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <div>
        <IdiomButton handleChangeLanguage={handleChangeLanguage} />
        <ThemeButton setIsDark={setIsDark} isDark={isDark} />
        <p>{t("header.message")}</p>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="alert alert-primary" role="alert">
        A simple primary alert—check it out!
      </div>
    </div>
  );
}

export default App;
