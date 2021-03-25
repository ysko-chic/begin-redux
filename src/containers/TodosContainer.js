import React, {Component} from 'react';
import Todos from 'components/Todos';
import {connect} from 'react-redux';
import {TodoActions} from 'store/actionCreators';

class TodosContainer extends Component {
  handleChange = (e) => {
    const value = e.target.value;
    TodoActions.changeInput(value);
  }

  handleInsert = () => {
    const {input} = this.props;
    TodoActions.insert(input);
    TodoActions.changeInput("");
  }

  handleToggle = (id) => {
    TodoActions.toggle(id);
  }

  handleRemove = (id) => {
    TodoActions.remove(id);
  }

  render() {

    const {handleChange, handleInsert, handleToggle, handleRemove} = this;
    const {input, todos} = this.props;

    return (
      <Todos 
        input={input}
        todos={todos}
        onChange={handleChange}
        onInsert={handleInsert}
        onToggle={handleToggle}
        onRemove={handleRemove}
      />
    )
  }
}

export default connect(
  ({todo}) => ({
    input: todo.input,
    todos: todo.todos
  })
)(TodosContainer);