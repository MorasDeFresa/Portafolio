/* eslint-disable react/prop-types */
import IdiomButton from "../IdiomButton/IdiomButton";
import ThemeButton from "../ThemeButton";

const NavBar = ({
  handleChangeLanguage,
  isDark,
  setIsDark,
  language,
  setLanguage,
}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          David Castro Mora
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <IdiomButton
                handleChangeLanguage={handleChangeLanguage}
                setLanguage={setLanguage}
                language={language}
              />
            </li>
            <li className="nav-item">
              <ThemeButton setIsDark={setIsDark} isDark={isDark} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
