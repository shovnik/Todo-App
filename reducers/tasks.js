import { ADD_TASK, REMOVE_TASK, TOGGLE_TASK } from '../actions/tasks';

export default function taskListReducer(state = [], { type, payload }) {
  switch (type) {
    case ADD_TASK:
      return [...state, {
        id: Date.now(),
        text: payload.text,
        completed: false
      }];
    case REMOVE_TASK:
      return state.filter(task => task.id !== payload.id);
    case TOGGLE_TASK:
      return state.map(task =>
        task.id === payload.id ? { ...task, completed: !task.completed }: task
      );
    default:
      return state;
  }
}
