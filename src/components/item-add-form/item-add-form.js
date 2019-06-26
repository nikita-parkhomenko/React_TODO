import React from 'react';

import './item-add-form.css';

class ItemAddForm extends React.Component {


  render() {
    const { onAdded } = this.props;

    return (
      <div className="item-add-form" >
        <button 
          type="button"
          className="btn btn-outline-secondary"
          onClick={ () => onAdded('New Item Added') } >
          Add new Note!
        </button>
      </div>
    );
  }
};

export default ItemAddForm;