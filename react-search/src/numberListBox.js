
import React from 'react';

export default function NumberListBox(props) {
  return (
    <textarea onChange={event => props.handleChange(event)}></textarea>

  );
}