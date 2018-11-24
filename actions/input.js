export const UPDATE_INPUT = 'input:updateInput';
export const CLEAR_INPUT = 'input:clearInput';

export const updateInput = newInput => ({
  type: UPDATE_INPUT,
  payload: { newInput }
});

export const clearInput = () => ({
  type: CLEAR_INPUT,
});
