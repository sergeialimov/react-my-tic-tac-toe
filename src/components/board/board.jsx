import React from 'react';
import ReactDOM from 'react-dom';
import Square from '../square/square.jsx';
import './board.css';

export default class Board extends React.Component {
  constructor () {
    super();
    this.state = {
      arr: Array(9)
        .fill(null),
      xIsNext: true,
    };
  }

  handleClick (i) {
    const { arr, xIsNext } = this.state;
    const arrCopy = arr.slice();
    const value = xIsNext ? 'X' : 'O';
    arrCopy[i] = value;
    this.setState({
      arr: arrCopy,
      xIsNext: !xIsNext,
    });
  }

  renderSquare (i) {
    const { arr } = this.state;
    return (
      <Square
        value={arr[i]}
      />
    );
  }

  render () {
    const { xIsNext } = this.state;
    const nextPlayer = xIsNext ? 'X' : 'O';
    const nextPlayerHeader = `next player is: ${nextPlayer}`;
    const winHeader = 'winner is: ';
    const winner = whoWin(this.state);
    const header = winner ? `${winHeader} + ${winner}` : nextPlayerHeader;

    return (
      <div className="board">
        <div className="header">
          Tic tac toe
        </div>
        <div className="header2">
          {header}
        </div>
        <div className="row">
          <div className="square" onClick={() => this.handleClick(0)} onKeyDown={() => this.handleClick(0)}>
            {this.renderSquare(0)}
          </div>
          <div className="square" onClick={() => this.handleClick(1)} onKeyDown={() => this.handleClick(1)}>
            {this.renderSquare(1)}
          </div>
          <div className="square" onClick={() => this.handleClick(2)} onKeyDown={() => this.handleClick(2)}>
            {this.renderSquare(2)}
          </div>
        </div>
        <div className="row">
          <div className="square" onClick={() => this.handleClick(3)} onKeyDown={() => this.handleClick(3)}>
            {this.renderSquare(3)}
          </div>
          <div className="square" onClick={() => this.handleClick(4)} onKeyDown={() => this.handleClick(4)}>
            {this.renderSquare(4)}
          </div>
          <div className="square" onClick={() => this.handleClick(5)} onKeyDown={() => this.handleClick(5)}>
            {this.renderSquare(5)}
          </div>
        </div>
        <div className="row">
          <div className="square" onClick={() => this.handleClick(6)} onKeyDown={() => this.handleClick(6)}>
            {this.renderSquare(6)}
          </div>
          <div className="square" onClick={() => this.handleClick(7)} onKeyDown={() => this.handleClick(7)}>
            {this.renderSquare(7)}
          </div>
          <div className="square" onClick={() => this.handleClick(8)} onKeyDown={() => this.handleClick(8)}>
            {this.renderSquare(8)}
          </div>
        </div>
      </div>
    );
  }
}

Board.displayName = 'Board';


ReactDOM.render(<Board />, document.getElementById('root'));

function whoWin (state) {
  const { arr } = state;
  const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let result;
  winCombinations.forEach((comb) => {
    if (arr[comb[0]] && arr[comb[0]] === arr[comb[1]] && arr[comb[1]] === arr[comb[2]]) {
      result = arr[comb[0]];
    }
  });
  return result;
}
