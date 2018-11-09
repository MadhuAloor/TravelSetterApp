import React, { Component } from 'react';
import {changePackedStatus ,removeItem} from '../actions';
import './Item.css';

class Item extends Component {
  
  handleToggle = () =>{
    changePackedStatus(this.props.item)
  }
  handleRemoveItem = () =>{
     removeItem(this.props.item)
  }
  render() {
    const { item } = this.props;
    return (
      <article className="Item">
        <label htmlFor={item.id}>
          <input
            type="checkbox"
            checked={item.packed}
            onChange={this.handleToggle}
            id={item.id}
          />
          {item.value}
        </label>
        <button className="Item-remove" onClick={this.handleRemoveItem}>
          Remove
        </button>
      </article>
    );
  }
}

export default Item;
