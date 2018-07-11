import { combineReducers } from "redux";
import { reducer as formReducers } from "redux-form";
import task from "./task";
import search from "./search";

export default combineReducers({
  task,
  search,
  form: formReducers
});
