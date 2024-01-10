import { useTranslation } from "react-i18next";

export const useLanguage = () => {
  const [t, i18n] = useTranslation("global");

  let language = i18n?.language;

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    language = i18n?.language;
  };

  return [t, changeLanguage, language];
};
