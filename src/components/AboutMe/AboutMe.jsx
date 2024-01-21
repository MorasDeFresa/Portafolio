/* eslint-disable react/no-unescaped-entities */
import "./AboutMe.css";
import { useLanguage } from "../../hooks/useLanguage";
import LinkSocialMedia from "../../assets/LinkSocialMedia.json";

const AboutMe = () => {
  const [t, handleChangeLanguage, actualLanguage] = useLanguage();
  let UrlCV;
  if (actualLanguage === "es") UrlCV = LinkSocialMedia.Es_CV;
  else {
    UrlCV = LinkSocialMedia.En_CV;
  }
  return (
    <div className="AboutDiv">
      <h2>{t("AboutMe.header")}</h2>
      <p>{t("AboutMe.content")}</p>
      <div style={{ marginTop: "1.5vh" }}>
        <button
          className="btn btn-outline-theme btn-floating m-1"
          target="blank"
        >
          <i className="bi bi-tools"></i>
          <span> {t("AboutMe.tool")}</span>
        </button>
        <a
          className="btn btn-outline-theme btn-floating m-1"
          target="blank"
          href={UrlCV}
        >
          <i className="bi bi-file-earmark-person-fill"></i>
          <span> {t("AboutMe.cv")}</span>
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
