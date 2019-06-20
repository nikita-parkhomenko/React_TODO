import React from 'react';
import TodoAppItems from './todo-app-items';


const TodoApp = () => {

  return (
    <ul>
      <li><TodoAppItems /></li>
      <li><TodoAppItems /></li>
    </ul>
  );
};

export default TodoApp;