import {CHANGE_INPUT_VALUE, ADD_LIST} from './actionTypes';

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


export {
  changeInputValue,
  addList
}