import React from 'react';
import PropTypes from 'prop-types';
import Square from '../square/square.jsx';
import './board.css';

export default function Board (props) {
  const { header, arr, handleClickParent } = props;

  const renderSquare = (i) => (
    <Square
      value={arr[i]}
    />
  );
  renderSquare.displayName = 'renderSquare';

  const handleClick = (i) => {
    handleClickParent(i);
  };

  return (
    <div className="board">
      <div className="header">
        Tic tac toe
      </div>
      <div className="header2">
        {header}
      </div>
      <div className="row">
        <div className="square" onClick={() => handleClick(0)} onKeyDown={() => handleClick(0)}>
          {renderSquare(0)}
        </div>
        <div className="square" onClick={() => handleClick(1)} onKeyDown={() => handleClick(1)}>
          {renderSquare(1)}
        </div>
        <div className="square" onClick={() => handleClick(2)} onKeyDown={() => handleClick(2)}>
          {renderSquare(2)}
        </div>
      </div>
      <div className="row">
        <div className="square" onClick={() => handleClick(3)} onKeyDown={() => handleClick(3)}>
          {renderSquare(3)}
        </div>
        <div className="square" onClick={() => handleClick(4)} onKeyDown={() => handleClick(4)}>
          {renderSquare(4)}
        </div>
        <div className="square" onClick={() => handleClick(5)} onKeyDown={() => handleClick(5)}>
          {renderSquare(5)}
        </div>
      </div>
      <div className="row">
        <div className="square" onClick={() => handleClick(6)} onKeyDown={() => handleClick(6)}>
          {renderSquare(6)}
        </div>
        <div className="square" onClick={() => handleClick(7)} onKeyDown={() => handleClick(7)}>
          {renderSquare(7)}
        </div>
        <div className="square" onClick={() => handleClick(8)} onKeyDown={() => handleClick(8)}>
          {renderSquare(8)}
        </div>
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
