import { rootReducer } from "./redux/reducers/rootReducer";
import { createStore } from "redux";

export const store = createStore(rootReducer);
