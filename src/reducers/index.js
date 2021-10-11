import { combineReducers } from "redux";
import mystoreReducer from "./mystore.reducer";


const rootReducer = combineReducers({
  mystoreReducer,
});

export default rootReducer;
