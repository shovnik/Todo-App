export const ADD_TASK = 'tasks:addTask';
export const REMOVE_TASK = 'tasks:removeTask';
export const TOGGLE_TASK = 'tasks:toggleTask';

export const addTask = text => ({
  type: ADD_TASK,
  payload: { text }
});

export const removeTask = id => ({
  type: REMOVE_TASK,
  payload: { id }
});

export const toggleTask = id => ({
  type: TOGGLE_TASK,
  payload: { id }
});
