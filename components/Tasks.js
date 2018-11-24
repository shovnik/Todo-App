import React from 'react';
import { connect } from 'react-redux';
import Task from './Task';
import { List } from '../styles';

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.filterList = this.filterList.bind(this);
  }
  filterList() {
    switch (this.props.filter) {
      case 'INCOMPLETE':
        return this.props.list.filter(task => !task.completed);
      case 'COMPLETE':
        return this.props.list.filter(task => task.completed);
      default:
        return this.props.list;
    }
  }
  render() {
    return (
      <List>
        {this.filterList().map((task, index) => <Task key={task.id} index={index} {...task} />)}
      </List>
    )
  }
};

const mapStateToProps = state => ({
  list: state.tasks,
  filter: state.filter
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
