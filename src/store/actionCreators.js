import {CHANGE_INPUT_VALUE, ADD_LIST, INIT_DATA} from './actionTypes';
import axios from 'axios';

const changeInputValue = (value) => (
  {
    type: CHANGE_INPUT_VALUE,
    value
  }
)
const addList = () => (
  {
    type: ADD_LIST,
  }
)

const initData = (value) => (
  {
    type: INIT_DATA,
    value
  }
)

const getInitDate = () => {
  return (dispatch) => {
    axios.get('http://localhost:3003/testApi').then(res => {
      const action = initData(res.data.data);
      dispatch(action)
    })
  }
}

export {
  changeInputValue,
  addList,
  getInitDate
}