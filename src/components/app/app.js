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
      { label: 'Play tennis', important: false, id: 1 },
      { label: 'Make Awesome App', important: true, id: 2 },
      { label: 'Go to Tinder Date', important: false, id: 3 }
    ]
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
      const newItem = { label: text, important: false, id: this.newID++ };

      const newData = [...todoData, newItem ];

      return {
        todoData: newData
      }
    })
  }

  onToggleDone = (id) => {
    console.log('On Done', id);
  };

  onToggleImportant = (id) => {
    console.log('On Important', id);
  };

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
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