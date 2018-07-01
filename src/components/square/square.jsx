import React from 'react';
import PropTypes from 'prop-types';
import './square.css';

export default function Square (props) {
  const { value } = props;
  return (
    <div className="text">
      {value}
    </div>
  );
}

Square.propTypes = {
  value: PropTypes.string,
};

Square.displayName = 'Square';
