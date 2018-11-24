import React from 'react';
import { connect } from 'react-redux';
import { removeTask, toggleTask } from '../actions/tasks';
import { Container, TouchableContainer, TaskText, DangerText } from '../styles';

class Task extends React.Component {
  render() {
    return (
      <Container index={this.props.index}>
        <TouchableContainer flex={4} onPress={() => this.props.toggle(this.props.id)}>
          <TaskText completed={this.props.completed}>{this.props.text}</TaskText>
        </TouchableContainer>
        <TouchableContainer flex={1} onPress={() => this.props.remove(this.props.id)}>
          <DangerText>Delete</DangerText>
        </TouchableContainer>
      </Container>
    )
  }
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  remove: id => dispatch(removeTask(id)),
  toggle: id => dispatch(toggleTask(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Task);
