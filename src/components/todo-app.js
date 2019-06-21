import React from 'react';
import TodoAppItems from './todo-app-items';


const TodoApp = ( { todos } ) => {
  const elements = todos.map( (elem) => {

      const { id, ...elemProps} = elem;

    return (
    <li key = { id }>
      <TodoAppItems { ...elemProps } />
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