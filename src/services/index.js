import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducer from "./root";
import { persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from 'redux-logger';

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["theme", "language", "user"]
};

const persistedReducer = persistReducer(persistConfig, reducer);

const configureStore = () => {
  const store = createStore(persistedReducer, applyMiddleware(logger, thunk));
  const persistor = persistStore(store);
  return {store, persistor};
};

export default configureStore;
