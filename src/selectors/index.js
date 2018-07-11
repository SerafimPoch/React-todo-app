export const getState = state => {
  return state.task.filter(item =>
    item.toLowerCase().includes(state.search.toLowerCase())
  );
};
