import React from 'react';
import TodoAppItems from './todo-app-items';


const TodoApp = ( { todos } ) => {
  const elements = todos.map( (elem) => {
    return (
    <li>
      <TodoAppItems { ...elem } />
    </li>
    )
  })

  return (
    <ul>
      {elements}
    </ul>
  );
};

export default TodoApp;