import React from 'react';
import PropTypes from 'prop-types';

export default function Square (props) {
  const { value } = props;
  return (
    <div>
      {value}
    </div>
  );
}

Square.propTypes = {
  value: PropTypes.string,
};

Square.displayName = 'Square';
