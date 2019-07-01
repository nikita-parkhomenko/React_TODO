import React, { Component } from 'react';


import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

class App extends Component {

  newID = 100;

  state = {
    todoData: [
      this.createTodoItem('Learn React'),
      this.createTodoItem('Go to GYM'),
      this.createTodoItem('Make awesome App')
    ],
    term: '',
    filter: ''
  };

  createTodoItem(label) {
    return {
      label,
      done: false,
      important: false,
      id: this.newID++
    }
  };


  deleteItem = (id) => {
    this.setState( ( { todoData } ) => {
      const index = todoData.findIndex( (el) => el.id === id );
      
      const before = todoData.slice(0, index);
      const after = todoData.slice(index + 1);
      const newData = [...before, ...after];

      return {
        todoData: newData
      }
    })
  };

  onAdded = (text) => {
    this.setState( ( { todoData } ) => {
      const newItem = this.createTodoItem(text);

      const newData = [...todoData, newItem ];

      return {
        todoData: newData
      }
    })
  };

  onToggleDone = (id) => {
    this.setState( ( { todoData } ) => {
      const index = todoData.findIndex( (el) => el.id === id );
      const oldItem = todoData[index];
      const newItem = {...oldItem, done: !oldItem.done};
      
      const before = todoData.slice(0, index);
      const after = todoData.slice(index + 1);
      const newData = [...before, newItem, ...after];

      return {
        todoData: newData
      }

    })
  };

  onToggleImportant = (id) => {
    this.setState( ( { todoData } ) => {
      const index = todoData.findIndex( (el) => el.id === id );
      const oldItem = todoData[index];
      const newItem = {...oldItem, important: !oldItem.important };

      const before = todoData.slice(0, index);
      const after = todoData.slice(index + 1);
      const newData = [...before, newItem, ...after];

      return {
        todoData: newData
      }
      
    })
  };

  search(array, term) {
    if (term.length === 0) return array;

    return array.filter( (item) => {
      return item.label
        .toLowerCase()
        .indexOf(term.toLowerCase()) > -1;
    })
  };

  onSearchChange = (term) => {
    this.setState({ term });
  };

  filter(arr, filter) {
    if (filter === 'active') return arr.filter( (item) => !item.done);
    if (filter === 'done') return arr.filter( (item) => item.done);
    if (filter === 'all') return arr;
    if (filter === '') return arr;
  }

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  render() {

    const { todoData, term, filter } = this.state;

    const visibleItems = this.filter(this.search(todoData, term), filter);

    const doneCount = todoData.filter( (el) => el.done ).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={ todoCount } done={ doneCount } />
        <div className="top-panel d-flex">
          <SearchPanel 
          onSearchChange = { this.onSearchChange } />
          <ItemStatusFilter 
          filter = { filter }
          onFilterChange = { this.onFilterChange } />
        </div>
  
        <TodoList 
          todos={ visibleItems } 
          onDeleted={ this.deleteItem }
          onToggleDone = {this.onToggleDone}
          onToggleImportant = {this.onToggleImportant} />
        <ItemAddForm 
          onAdded={ this.onAdded }/>
      </div>
    );
  }
};

export default App;