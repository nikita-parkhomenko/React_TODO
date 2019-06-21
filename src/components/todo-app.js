import React from 'react';
import TodoAppItems from './todo-app-items';


const TodoApp = () => {

  return (
    <ul>
      <li><TodoAppItems label="Learn React" /></li>
      <li><TodoAppItems label="Go to Tinder Date" /></li>
      <li><TodoAppItems label="Build React Awesome Page"
      important /></li>
    </ul>
  );
};

export default TodoApp;