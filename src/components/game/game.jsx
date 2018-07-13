import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Board from '../board/board.jsx';
import { whoWin } from '../../lib/winner.js';
import './game.css';

export default class Game extends Component {
  constructor () {
    super();
    this.state = {
      arr: Array(9)
        .fill(null),
      xIsNext: true,
      historyArr: [Array(9)],
      buttons: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  setHistoryBoard (i) {
    const { historyArr, buttons } = this.state;
    if (Array.isArray(historyArr[1])) {
      const newHistoryArr = historyArr.slice(0, i);
      const newButtons = buttons.slice(0, i);
      this.setState({
        arr: historyArr[i],
        buttons: newButtons,
        historyArr: newHistoryArr,
      });
    }
  }

  handleClick (i) {
    const {
      arr, historyArr, xIsNext, buttons,
    } = this.state;
    const arrCopy = arr.slice();
    const historyArrCopy = historyArr.slice();
    const buttonsCopy = buttons;
    const nextMove = xIsNext ? 'X' : 'O';
    const winner = whoWin(arr);
    arrCopy[i] = nextMove;
    buttonsCopy.push(`go to move # ${buttonsCopy.length}`);
    historyArrCopy.push(arrCopy);

    if (!winner && !arr[i]) {
      this.setState({
        arr: arrCopy,
        xIsNext: !xIsNext,
        historyArr: historyArrCopy,
        buttons: buttonsCopy,
      });
    }
  }

  Board (header) {
    const { arr } = this.state;
    return (
      <Board
        header={header}
        arr={arr}
        handleClickParent={this.handleClick}
      />
    );
  }

  MoveButtons () {
    const { buttons } = this.state;
    return (
      <div>
        {buttons.map((button) => (
          <div key={button}>
            <button
              className="button"
              type="button"
              onClick={() => this.setHistoryBoard(buttons.indexOf(button))}
            >
              {button}
            </button>
          </div>
        ))}
      </div>
    );
  }

  render () {
    const { xIsNext, arr } = this.state;
    const nextPlayer = xIsNext ? 'X' : 'O';
    const nextPlayerHeader = `next player is: ${nextPlayer}`;
    const winner = whoWin(arr);
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
        {this.Board(header)}
        {this.MoveButtons()}
      </div>
    );
  }
}

Game.displayName = 'Game';

ReactDOM.render(<Game />, document.getElementById('root'));
