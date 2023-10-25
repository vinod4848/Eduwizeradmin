/**
 * Initalize the store and apply all the middlewares
 */

import { createStore, applyMiddleware } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./Reducers";

const persistConfig = {
  key: "user",
  storage,
  whitelist: ["dataReducer"], // which reducer want to store
};

const pReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(pReducer, composeWithDevTools(applyMiddleware()));

const persistor = persistStore(store);

export { store, persistor };
