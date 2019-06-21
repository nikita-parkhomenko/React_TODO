import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchBar from './components/search-bar';
import TodoApp from './components/todo-app';

const App = () => {
  const todoData = [
    { label: 'Learn React', important: false, id: 1 },
    { label: 'Go to Tinder Date', important: false, id: 2 },
    { label: 'Build React Awesome Page', important: true, id: 3 }
  ];

  return (
    <div>
      <AppHeader />
      <SearchBar />
      <TodoApp todos = { todoData } />
    </div>
  )
}

const root = document.getElementById('root');

ReactDOM.render(<App />, root);

const person = {
  name: {
    first: 'John',
    last: 'Doe'
  },
  age: 25
}

const { name: { first: firstName, last: lastName } } = person;

console.log(firstName)
console.log(lastName)

const animals = {
  Kate: 'SMM',
  Jane: 'JS',
  John: 'JS',
  Kane: 'Design'
};

const result = Object.entries(animals)
  .filter( ([name, value]) => value === 'JS' )
  .map( ([name, value]) => name )
console.log(result);
