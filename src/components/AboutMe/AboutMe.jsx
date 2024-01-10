/* eslint-disable react/no-unescaped-entities */
import "./AboutMe.css";
import { useLanguage } from "../../hooks/useLanguage";

const AboutMe = () => {
  const [t] = useLanguage();
  return (
    <div className="AboutDiv">
      <h2>{t("AboutMe.header")}</h2>
      <p>{t("AboutMe.content")}</p>
    </div>
  );
};

export default AboutMe;
