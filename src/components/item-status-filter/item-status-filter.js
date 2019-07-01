import React, { Component } from 'react';

import './item-status-filter.css';


class ItemStatusFilter extends Component {

  
  render() {

    const { onActive } = this.props;

      return (
        <div className="btn-group">
          <button type="button"
                  className="btn btn-info">All</button>
          <button type="button"
                  className="btn btn-outline-secondary"
                  onClick = { onActive } >Active</button>
          <button type="button"
                  className="btn btn-outline-secondary">Done</button>
        </div>
      );
    }
}

export default ItemStatusFilter;
