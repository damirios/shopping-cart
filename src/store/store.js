import { applyMiddleware, createStore } from "redux";
import localStorageActionsMiddleware from "../middlewares/localStorageActionsMiddleware";

import rootReducer from "./rootReducer";

const store = createStore(rootReducer, applyMiddleware(localStorageActionsMiddleware));

export default store;