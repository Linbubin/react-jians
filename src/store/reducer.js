import {CHANGE_VALUE,ADD_LIST,REMOVE_LIST,GET_INIT_DATA} from './actionTypes';

const defaultState = {
  value: '123',
  list: []
}

export default (state=defaultState, action) => {
  let newValue = Object.assign({}, state);
  switch(action.type){
    case CHANGE_VALUE:
      newValue.value = action.value;
      return newValue
    case ADD_LIST:
      newValue.list.push(newValue.value);
      newValue.value = '';
      return newValue;
    case REMOVE_LIST:
      console.log('11111111111', action, newValue)
      newValue.list.splice(action.index, 1);
      console.log(newValue)
      return newValue
  }
  return state
}