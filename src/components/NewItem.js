import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';
import { addItem } from '../actions';

import './NewItem.css';

class NewItem extends Component {
  state = { value: '' };

  handleChange = event => {
    // Do something when the state of this input changes.
    const value = event.target.value;
    this.setState({value})
  };

  handleSubmit = event => {
    const { value } = this.state;
    event.preventDefault();
    addItem({value,id:uniqueId, packed: false});
    this.setState({value: ''});
  };

  render() {
    const { value } = this.state;

    return (
      <form className="NewItem" onSubmit={this.handleSubmit}>
        <input
          className="NewItem-input"
          type="text"
          value={value}
          onChange={this.handleChange}
        />
        <input className="NewItem-submit button" type="submit" />
      </form>
    );
  }
}

export default NewItem;
