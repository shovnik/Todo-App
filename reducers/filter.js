import { SET_FILTER } from '../actions/filter'

export default function filterReducer(state = 'ALL', { type, payload }) {
  switch (type) {
    case SET_FILTER:
      return payload.filter;
    default:
      return state;
  }
}
