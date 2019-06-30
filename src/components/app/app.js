import React from 'react';


import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

class App extends React.Component {

  newID = 100;

  state = {
    todoData: [
      this.createTodoItem('Learn React'),
      this.createTodoItem('Go to GYM'),
      this.createTodoItem('Make awesome App')
    ]
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
  }

  addItem = (text) => {
    this.setState( ( { todoData } ) => {
      const newItem = this.createTodoItem(text);

      const newData = [...todoData, newItem ];

      return {
        todoData: newData
      }
    })
  }

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
    
  };

  render() {

    const doneCount = this.state.todoData.filter( (el) => el.done ).length;
    const todoCount = this.state.todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={ todoCount } done={ doneCount } />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
  
        <TodoList 
          todos={this.state.todoData} 
          onDeleted={ this.deleteItem }
          onToggleDone = {this.onToggleDone}
          onToggleImportant = {this.onToggleImportant} />
        <ItemAddForm 
          onAdded={ this.addItem }/>
      </div>
    );
  }
};

export default App;