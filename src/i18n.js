import i18n from "i18next";
import { initReactI18next} from "react-i18next";
import eng from "./translation/eng.json";
import rus from "./translation/rus.json";

const resources = {
  eng: {
    translation: eng
    },
    rus: {
      translation: rus
    }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "eng",
    keySeparator: false,
    intrpolation: {
      escapeValue: false
    }
  });

  export default i18n;
