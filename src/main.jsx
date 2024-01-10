/* eslint-disable react-hooks/rules-of-hooks */
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import global_en from "./translations/en/global.json";
import global_es from "./translations/es/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

let userLanguage = navigator.language || navigator.userLanguage;
const index = userLanguage.indexOf("-");
if (index != -1) userLanguage = userLanguage.substring(0, index);
if (!userLanguage.includes("es") && !userLanguage.includes("en"))
  userLanguage = "en";

i18next.init({
  interpolation: { escapeValue: false },
  lng: userLanguage,
  resources: {
    en: {
      global: global_en,
    },
    es: {
      global: global_es,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>
);
