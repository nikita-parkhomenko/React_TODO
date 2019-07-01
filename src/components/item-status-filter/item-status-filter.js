import React, { Component } from 'react';

import './item-status-filter.css';


class ItemStatusFilter extends Component {

  buttons = [
    { name: 'all', label: 'All'},
    { name: 'active', label: 'Active'},
    { name: 'done', label: 'Done'}
  ]

  render() {

    const { filter, onFilterChange } = this.props;

    const buttons = this.buttons.map( (item) => {
      const isActive = filter === item.name;
      const btnClass = isActive ? 'btn-info' : 'btn-outline-secondary';
      return (
        <button type = "button"
          className = {`btn ${btnClass}`}
          key = { item.name } 
          onClick = { () => onFilterChange(item.name) }  > 
          { item.label } </button>

      )
    })

      return (
        <div className="btn-group">
          {buttons}
        </div>
      );
    }
}

export default ItemStatusFilter;
