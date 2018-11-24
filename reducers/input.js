import { UPDATE_INPUT, CLEAR_INPUT } from '../actions/input'

export default function inputReducer(state = '', { type, payload }) {
  switch (type) {
    case UPDATE_INPUT:
      return payload.newInput;
    case CLEAR_INPUT:
      return '';
    default:
      return state;
  }
}
