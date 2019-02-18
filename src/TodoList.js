import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store';
import {changeInputValue, addList} from './store/actionCreators';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(this.handleSubscribe);
  }
  render() {
    return (
      <Fragment>
        <Input value={this.state.inputValue} onChange={this.handleOnChange} placeholder="输入一些什么" style={{ width: 300 }} />
        <Button type="primary" onClick={this.handleClick}>添加</Button>
        <List
          dataSource={this.state.list}
          renderItem={item => (<List.Item>{item}</List.Item>)}
        />
      </Fragment>
    )
  }
  handleOnChange = (e) => {
    const action = changeInputValue(e.target.value);
    // console.log(e.target.value)
    store.dispatch(action)
  }
  handleClick = () => {
    const action = addList();
    store.dispatch(action)
  }
  handleSubscribe = () => {
    this.setState(store.getState())
  }
}

export default TodoList;