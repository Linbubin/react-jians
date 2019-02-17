import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
  render() {
    return (
      <div onClick={this.handleClick}>{this.props.value}</div>
    )
  }
  handleClick = () => {
    const { handleRemove, index } = this.props;
    handleRemove(index);
  }
}

TodoItem.propTypes = {
  value: PropTypes.string,
  handleRemove: PropTypes.func,
  index: PropTypes.number
}

export default TodoItem;