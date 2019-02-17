import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      list: []
    }
  }
  render() {
    return (
      <Fragment>
        <input value={this.state.value} onChange={this.handleChnage} />
        <button onClick={this.handleAdd}>添加</button>
        {this.getItemList()}
      </Fragment>
    );
  }

  getItemList = () => {
    return this.state.list.map((item, index) => (
      <TodoItem key={index} index={index} handleRemove={this.handleRemove} value={item} />
    ))
  }

  handleRemove = (index) => {
    this.setState((prevState) => {
      let list = [...prevState.list];
      list.splice(index, 1);
      return {list}
    })
  }

  handleAdd = () => {
    this.setState((prevState) => {
      return {
        value: '',
        list: [...prevState.list, prevState.value]
      }
    })
  }

  handleChnage = (e) => {
    const value = e.target.value;
    this.setState(() => ({ value }))
  }
}

export default App;
