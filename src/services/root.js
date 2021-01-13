import {combineReducers} from "redux";
import videoReducer from "./VideoReducer/reducer";
import languageReducer from "./LanguageReducer/reducer";

export default combineReducers({
  video: videoReducer,
  language: languageReducer
});
