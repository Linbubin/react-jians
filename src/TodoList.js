import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input } from 'antd';
import store from './store';

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = store.getState();
    console.log(this.state)
  }
  render() {
    return (
      <Input />
    )
  }
}

export default TodoList;