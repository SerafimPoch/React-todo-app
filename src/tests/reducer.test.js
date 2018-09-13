import reducer from "../store/reducers/task";
import * as types from "../store/actions/actionTypes";

describe("todo reducer", () => {
  it("shoul return the initial state", () => {
    expect(reducer([], {})).toEqual([]);
  });

  it("should handle ADD_TASK ", () => {
    expect(
      reducer([], {
        type: types.ADD_TASK,
        payload: "Fishing"
      })
    ).toEqual(["Fishing"]);
  });

  it("should handle REMOVE_TASK", () => {
    expect(
      reducer(["Fishing"], {
        type: types.REMOVE_TASK,
        payload: "Fishing"
      })
    ).toEqual([]);
  });
});
