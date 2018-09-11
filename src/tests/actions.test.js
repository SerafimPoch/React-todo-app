import * as types from "../store/actions/actionTypes";
import * as action from "../store/actions/";

describe("actions", () => {
  it("should create add action", () => {
    const task = "Fishing";
    const expectedAction = {
      type: types.ADD_TASK,
      payload: task
    };
    expect(action.add(task)).toEqual(expectedAction);
  });

  it("should create remove action", () => {
    const task = "Fishing";
    const expectedAction = {
      type: types.REMOVE_TASK,
      payload: task
    };
    expect(action.remove(task)).toEqual(expectedAction);
  });

  it("should create search action", () => {
    const task = "Fishing";
    const expectedAction = {
      type: types.SEARCH_TASK,
      payload: task
    };
    expect(action.search(task)).toEqual(expectedAction);
  });
});
