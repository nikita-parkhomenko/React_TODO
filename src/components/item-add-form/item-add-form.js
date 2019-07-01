import React, { Component } from 'react';

import './item-add-form.css';

class ItemAddForm extends Component {

  state = {
    label: ''
  }

  onLabelChange = (event) => {
    this.setState({
      label: event.target.value
    })
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onAdded(this.state.label);
  }


  render() {

    return (
      <form className="item-add-form d-flex" 
        onSubmit = { this.onSubmit }>
        <input type = "text"
          className = "form-control"
          onChange = { this.onLabelChange }
          placeholder = {'What needs to be done?'} />
        <button 
          type = "submit"
          className = "btn btn-outline-secondary">
          Add new Note!
        </button>
      </ form>
    );
  }
};

export default ItemAddForm;