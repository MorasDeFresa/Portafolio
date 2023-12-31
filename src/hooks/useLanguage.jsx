import { useTranslation } from "react-i18next";

export const useLanguage = () => {
  const [t, i18n] = useTranslation("global");

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  return [t, changeLanguage];
};
