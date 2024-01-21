import LinkSocialMedia from "../../assets/LinkSocialMedia.json";
import { useLanguage } from "../../hooks/useLanguage";

const SocialMedia = () => {
  const [t, , actualLanguage] = useLanguage();
  let UrlMeet;
  if (actualLanguage === "es") UrlMeet = LinkSocialMedia.Reunion;
  else {
    UrlMeet = LinkSocialMedia.Meet;
  }
  return (
    <div>
      <h1>{t("SocialMedia.header")}</h1>
      <div>
        {LinkSocialMedia?.Media?.map((link) => (
          <a
            className="btn btn-outline-theme btn-floating m-1"
            style={{ marginRight: "15px" }}
            key={link.Url}
            target="blank"
            href={`${link.Url}`}
          >
            <i className={`bi ${link.Image}`}></i>
          </a>
        ))}
      </div>
      <div style={{ marginTop: "1.5vh" }}>
        <a
          className="btn btn-outline-theme btn-floating m-1"
          target="blank"
          href={UrlMeet}
          style={{ minWidth: "100px" }}
        >
          <i className="bi bi-calendar-plus-fill"></i>
          <span> {t("SocialMedia.meet")}</span>
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
