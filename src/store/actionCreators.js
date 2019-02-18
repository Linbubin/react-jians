import {CHANGE_VALUE,ADD_LIST,REMOVE_LIST,GET_INIT_DATA} from './actionTypes';

const changeValue = (value) => (
  {
    type: CHANGE_VALUE,
    value
  }
)
const addList = () => (
  {
    type: ADD_LIST,
  }
)
const removeList = (index) => (
  {
    type: REMOVE_LIST,
    index
  }
)
const getInitData = () => (
  {
    type: GET_INIT_DATA,
  }
)

export {
  changeValue,
  addList,
  removeList,
  getInitData
}