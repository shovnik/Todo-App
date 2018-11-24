export const SET_FILTER = 'filter:setFilter';

export const setFilter = filter => ({
  type: SET_FILTER,
  payload: { filter }
});
