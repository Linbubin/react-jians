import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
  render() {
    return (
      <div onClick={this.handleClick}>{this.props.test} - {this.props.value}</div>
    )
  }

  shouldComponentUpdate(){
    return false 
  }

  handleClick = () => {
    const { handleRemove, index } = this.props;
    handleRemove(index);
  }
}

TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleRemove: PropTypes.func,
  index: PropTypes.number
}

TodoItem.defaultProps = {
  test: 'hello world'
}

export default TodoItem;