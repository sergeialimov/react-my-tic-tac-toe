import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Board from '../board/board.jsx';

export default class Game extends Component {
  constructor () {
    super();
    this.state = {
      arr: Array(9)
        .fill(null),
      xIsNext: true,
      historyArr: [Array(9)],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (i) {
    const { arr, historyArr, xIsNext } = this.state;
    const arrCopy = arr.slice();
    const historyArrCopy = historyArr.slice();
    const nextMove = xIsNext ? 'X' : 'O';
    const winner = whoWin(this.state);
    arrCopy[i] = nextMove;
    historyArrCopy.push(arrCopy);

    if (!winner && !arr[i]) {
      this.setState({
        arr: arrCopy,
        xIsNext: !xIsNext,
        historyArr: historyArrCopy,
      });
    }
  }

  renderBoard (header) {
    const { arr } = this.state;
    return (
      <Board
        header={header}
        arr={arr}
        handleClickParent={this.handleClick}
      />
    );
  }

  renderHistoryBoard (i) {
    const { historyArr } = this.state;
    if (Array.isArray(historyArr[1])) {
      this.setState({
        arr: historyArr[i],
      });
    }
  }

  renderStartGame () {
    this.setState({
      arr: Array(9)
        .fill(null),
      xIsNext: true,
    });
  }

  renderButtons () {
    return (
      <button type="button" onClick={() => this.renderStartGame()}>
        Go to game start
      </button>
    );
  }

  render () {
    const { xIsNext } = this.state;
    const nextPlayer = xIsNext ? 'X' : 'O';
    const nextPlayerHeader = `next player is: ${nextPlayer}`;
    const winner = whoWin(this.state);
    let header;
    if (winner === 'nobody') {
      header = 'Nobody wins';
    } else if (!winner) {
      header = nextPlayerHeader;
    } else {
      header = `Winner is:  ${winner}!`;
    }
    return (
      <div className="game">
        {this.renderBoard(header)}
        {this.renderButtons()}
      </div>
    );
  }
}

Game.displayName = 'Game';

ReactDOM.render(<Game />, document.getElementById('root'));

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

  if (!arr.includes(null) && !result) {
    result = 'nobody';
  }
  return result;
}
