import React from 'react';
import { connect } from 'react-redux';
import { clearInput, updateInput } from '../actions/input';
import { addTask } from '../actions/tasks';
import { Form, Input, SubmitButton } from '../styles';

class NewTask extends React.Component {
  render() {
    return (
      <Form>
        <Input placeholder="New Task" ref={input => { this.input = input }} onChangeText={this.props.update}></Input>
        <SubmitButton title="Add" onPress={() => this.props.submit(this.props.input.trim(), this.input)}>Add</SubmitButton>
      </Form>
    )
  }
};

const mapStateToProps = state => ({
  input: state.input
});

const mapDispatchToProps = dispatch => ({
  update: newInput => dispatch(updateInput(newInput)),
  submit: (text, textInput) => {
    if(text !== '') {
      dispatch(addTask(text));
      dispatch(clearInput());
      textInput.clear();
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTask);
