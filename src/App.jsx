/* eslint-disable react/no-unknown-property */
import useLocalStorage from "use-local-storage";
import { useEffect } from "react";
import "./App.css";

import { useLanguage } from "./hooks/useLanguage";
import NavBar from "./components/NavBar/NavBar";
import Projects from "./components/Projects/Projects";
import AboutMe from "./components/AboutMe/AboutMe";
import SocialMedia from "./components/SocialMedia/SocialMedia";

function App() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);
  const [t, handleChangeLanguage, actualLanguage] = useLanguage();
  const [language, setLanguage] = useLocalStorage("language", actualLanguage);

  useEffect(() => {
    handleChangeLanguage(language);
  }, []);

  return (
    <>
      <NavBar
        handleChangeLanguage={handleChangeLanguage}
        isDark={isDark}
        setIsDark={setIsDark}
        language={language}
        setLanguage={setLanguage}
      />
      <div className="App" data-theme={isDark ? "dark" : "light"}>
        <h1>{t("header.message")}</h1>
        <div className="Content">
          <AboutMe />
          <hr />
          <Projects />
          <hr />
          <SocialMedia />
        </div>
      </div>
    </>
  );
}

export default App;
