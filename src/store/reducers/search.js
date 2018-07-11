import { SEARCH_TASK } from "../actions/actionTypes";

const init = "";

export default (state = init, { type, payload }) => {
  switch (type) {
    case SEARCH_TASK:
      return payload;
    default:
      return state;
  }
};
