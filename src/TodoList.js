import React, { Component, Fragment } from 'react';
// import store from './store'
import {connect} from 'react-redux';
import {
  changeValue,
  addList,
  removeList,
  getInitData
} from './store/actionCreators';

class TodoList extends Component {
  render() {
    console.log('props::', this.props)
    return (
      <Fragment>
        <div>
          <input value={this.props.value} onChange={this.props.handleChange} />
          <button onClick={this.props.handleClick}>提交</button>
        </div>
        <ul>
          {this.props.list.map((item,index) => <li onClick={this.props.removeList.bind(this, index)} key={index}>{item}</li>)}
        </ul>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => (
  {
    value: state.value,
    list: state.list
  }
)

const mapDispatchToProps = (dispatch) => ({
  handleChange(e){
    // console.log(e);
    const action = changeValue(e.target.value);
    dispatch(action);
    // dispatch()
  },
  handleClick(){
    const action = addList();
    dispatch(action);
  },
  removeList(index){
    const action = removeList(index);
    dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);