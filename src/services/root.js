import {combineReducers} from "redux";
import videoReducer from "./VideoReducer/reducer";
import languageReducer from "./LanguageReducer/reducer";
import themeReducer from "./ThemeReducer/reducer";
import userReducer from "./UserReducer/reducer";
import subsReducer from "./SubscribeReducer/reducer";

export default combineReducers({
  video: videoReducer,
  language: languageReducer,
  theme: themeReducer,
  user: userReducer,
  subs: subsReducer
});
