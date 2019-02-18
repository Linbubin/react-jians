import {CHANGE_INPUT_VALUE, ADD_LIST, INIT_DATA} from './actionTypes';

const defaultStore = {
  inputValue: '',
  list: []
}

export default (state = defaultStore, action) => {
  // console.log('reducer::', state, action)
  let newValue;
  switch(action.type){
    case CHANGE_INPUT_VALUE:
      newValue = Object.assign({}, state);
      newValue.inputValue = action.value;
      return newValue
    case ADD_LIST:
      newValue = Object.assign({}, state);
      newValue.list.push(state.inputValue);
      newValue.inputValue = '';
      return newValue
    case INIT_DATA:
      newValue = Object.assign({}, state);
      newValue.list = action.value;
      return newValue
  }
  return state
}