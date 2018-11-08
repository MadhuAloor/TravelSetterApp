import React, { Component } from 'react';
import JetSetter from '../JetSetterStore';
import * as actions from '../actions';
import CountDown from './CountDown';
import NewItem from './NewItem';
import Items from './Items';

import './Application.css';

class Application extends Component {
  state = JetSetter.getState();


  updateJetSetter = () => {
    this.setState(JetSetter.getState());
  }

  componentDidMount() {
    JetSetter.on('change', this.updateJetSetter);
  }

  componentWillUnmount() {
    JetSetter.off('change', this.updateJetSetter);
  }

  addItem = (item) =>{
    actions.addItem(item);
  }
  
   removeItem = (itemToRemove)=>{
     actions.removeItem(itemToRemove);
   }

   toggleItem = (itemToToggle) =>{
      actions.changePackedStatus(itemToToggle);
   }

   markAllAsUnpacked = () =>{
     actions.markAllAsUnpacked();
   }
  // How are we going to manipulate the state?
  // Ideally, users are going to want to add, remove,
  // and check off items, right?

  render() {
    // Get the items from state
    const { items } = this.state;
    const unPackedItems = items.filter(item=>!item.packed)
    const packedItems = items.filter(item=>item.packed)
    return (
      <div className="Application">
        <NewItem onSubmit={this.addItem}/>
        <CountDown />
        <Items title="Unpacked Items" items={unPackedItems} onRemove ={this.removeItem} onToggle ={this.toggleItem}/>
        <Items title="Packed Items" items={packedItems} onRemove ={this.removeItem} onToggle ={this.toggleItem}/>
        <button className="button full-width" onClick={this.markAllAsUnpacked}>Mark All As Unpacked</button>
      </div>
    );
  }
}

export default Application;
