import React from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { Constants } from 'expo'
import filterReducer from './reducers/filter';
import inputReducer from './reducers/input';
import tasksReducer from './reducers/tasks';
import NewTask from './components/NewTask';
import Tasks from './components/Tasks';
import Filter from './components/Filter';
import { Wrapper } from './styles';

const reducer = combineReducers({
  filter: filterReducer,
  input: inputReducer,
  tasks: tasksReducer
});

const store = createStore(reducer);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Wrapper keyboardShouldPersistTaps={'handled'}>
          <Filter />
          <NewTask />
          <Tasks />
        </Wrapper>
      </Provider>
    );
  }
}

export default App;
