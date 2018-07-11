import { ADD_TASK, REMOVE_TASK } from "../actions/actionTypes";

const init = [];

export default (state = init, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return [...state, payload];
    case REMOVE_TASK:
      return state.filter(e => e !== payload);
    default:
      return state;
  }
};
