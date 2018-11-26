import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers/rootReducer'
import NewTask from './components/NewTask';
import Tasks from './components/Tasks';
import Filter from './components/Filter';
import { Wrapper } from './styles';

const store = createStore(rootReducer);

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
