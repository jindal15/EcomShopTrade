import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import shopTrade from "./shopTrade";

export default combineReducers({
  routerReducer,
  shopTrade
});
