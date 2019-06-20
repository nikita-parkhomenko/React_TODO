import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchBar from './components/search-bar';
import TodoApp from './components/todo-app';

const App = () => {

  const isLoggedIn = true;
  const loginBox = <span>Please log in.</span>
  const welcomeBox = <span>Welcome back dude.</span>

  return (
    <div>
      { isLoggedIn ? welcomeBox : loginBox }
      <AppHeader />
      <SearchBar />
      <TodoApp />
    </div>
  )
}

const root = document.getElementById('root');

ReactDOM.render(<App />, root);
// test