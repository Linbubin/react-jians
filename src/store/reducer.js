const defaultStore = {
  inputValue: '',
  list: []
}

export default (state = defaultStore, action) => {
  // console.log('reducer::', state, action)
  let newValue;
  switch(action.type){
    case 'change_input_value':
      newValue = Object.assign({}, state);
      newValue.inputValue = action.value;
      return newValue
    case 'add_list':
      newValue = Object.assign({}, state);
      newValue.list.push(state.inputValue);
      newValue.inputValue = '';
      return newValue
  }
  return state
}