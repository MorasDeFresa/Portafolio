/* eslint-disable react/no-unescaped-entities */
import "./AboutMe.css";
import { useLanguage } from "../../hooks/useLanguage";
import LinkSocialMedia from "../../assets/LinkSocialMedia.json";
import SkillMedia from "../../assets/SkillMedia.json";
import { ModalContext } from "../../App";
import { useContext } from "react";

const AboutMe = () => {
  const [openModal, setOpenModal, , setContent] = useContext(ModalContext);
  const [t, , actualLanguage] = useLanguage();
  let UrlCV;
  if (actualLanguage === "es") UrlCV = LinkSocialMedia.Es_CV;
  else {
    UrlCV = LinkSocialMedia.En_CV;
  }

  const ModalContent = (
    <>
      <h1>Habilidades tecnicas</h1>
      <hr />
      <h2>Back-end</h2>
      {SkillMedia?.Backend?.Media.map((skill, index) => (
        <a key={index} href={skill?.url} target="blank">
          <img src={skill?.img} height="20%" width="20%" alt="" />
        </a>
      ))}
      <hr />
      <h2>Front-end</h2>
      {SkillMedia?.Frontend?.Media.map((skill, index) => (
        <a key={index} href={skill?.url} target="blank">
          <img src={skill?.img} height="20%" width="20%" alt="" />
        </a>
      ))}
      <hr />
      <h2>Database</h2>
      {SkillMedia?.DataBase?.Media.map((skill, index) => (
        <a key={index} href={skill?.url} target="blank">
          <img src={skill?.img} height="20%" width="20%" alt="" />
        </a>
      ))}
      <hr />
      <h2>DevOps</h2>
      {SkillMedia?.DevOps?.Media.map((skill, index) => (
        <a key={index} href={skill?.url} target="blank">
          <img src={skill?.img} height="20%" width="20%" alt="" />
        </a>
      ))}
    </>
  );

  return (
    <div className="AboutDiv">
      <h2>{t("AboutMe.header")}</h2>
      <p>{t("AboutMe.content")}</p>
      <div style={{ marginTop: "1.5vh" }}>
        <button
          className="btn btn-outline-theme btn-floating m-1"
          target="blank"
          onClick={() => {
            setContent(ModalContent);
            setOpenModal(!openModal);
          }}
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
