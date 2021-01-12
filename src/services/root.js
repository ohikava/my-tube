import {combineReducers} from "redux";
import videoReducer from "./VideoReducer/reducer";


export default combineReducers({
  video: videoReducer
});
