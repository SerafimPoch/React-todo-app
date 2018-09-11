import { ADD_TASK, REMOVE_TASK, SEARCH_TASK } from "./actionTypes";

export const add = task => ({ type: ADD_TASK, payload: task });

export const remove = task => ({ type: REMOVE_TASK, payload: task });

export const search = task => ({ type: SEARCH_TASK, payload: task });
