import React from 'react';

const TodoAppItems = ({ label,  important = false }) => {
  const style = {
    color: important ? 'violet' : 'grey'
  }

  return <span style = { style }>{ label }</span>
};

export default TodoAppItems;
