import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type rootStore = ReturnType<typeof rootReducer>;

export default store;