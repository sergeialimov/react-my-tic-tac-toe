import React from 'react';
import PropTypes from 'prop-types';
import Square from '../square/square.jsx';
import './board.css';

export default function Board (props) {
  const { header, arr, handleClickParent } = props;

  const renderSquare = (i) => (
    <Square
      onClick={() => handleClickParent(i)}
      value={arr[i]}
    />
  );
  renderSquare.displayName = 'renderSquare';

  return (
    <div className="board">
      <div className="header">
        Tic tac toe
      </div>
      <div className="header2">
        {header}
      </div>
      <div className="row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}


Board.propTypes = {
  header: PropTypes.string,
  handleClickParent: PropTypes.func,
  arr: PropTypes.array,
};

Board.displayName = 'Board';
