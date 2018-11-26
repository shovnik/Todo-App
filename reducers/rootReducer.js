import { combineReducers } from 'redux';
import filterReducer from './filter';
import inputReducer from './input';
import tasksReducer from './tasks';

export default combineReducers({
  filter: filterReducer,
  input: inputReducer,
  tasks: tasksReducer
});
