import React from 'react';
import PropTypes from 'prop-types';
import './square.css';

export default function Square (props) {
  const { value, onClick } = props;

  return (
    <button
      type="button"
      className="square"
      onClick={onClick}
      onKeyDown={() => onClick()}
    >
      {value}
    </button>
  );
}

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
};

Square.displayName = 'Square';
