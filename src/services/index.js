import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducer from "./root";

const store = () => {
  const result = createStore(reducer, applyMiddleware(thunk));
  return result;
};

export default store;
