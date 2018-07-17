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
      historyMoves: [Array(9)],
      historyXIsNext: [true],
      buttons: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  setHistoryBoard (i) {
    const { historyMoves, buttons, historyXIsNext } = this.state;
    const newHistoryArr = historyMoves.slice(0, i + 1);
    const newButtons = buttons.slice(0, i);
    const historyXIsNextCopy = historyXIsNext.slice(0, i + 1);

    this.setState({
      arr: historyMoves[i],
      buttons: newButtons,
      historyMoves: newHistoryArr,
      historyXIsNext: historyXIsNextCopy,
    });
  }

  handleClick (i) {
    const {
      arr, historyMoves, buttons, historyXIsNext,
    } = this.state;
    const arrCopy = arr.slice();
    const historyMovesCopy = historyMoves.slice();
    const buttonsCopy = buttons;
    const xIsNext = historyXIsNext[historyXIsNext.length - 1];
    const nextMove = xIsNext ? 'X' : 'O';
    const winner = whoWin(arr);
    arrCopy[i] = nextMove;
    historyXIsNext.push(!xIsNext);
    buttonsCopy.push(`go to move # ${buttonsCopy.length + 1}`);
    historyMovesCopy.push(arrCopy);

    if (!winner && !arr[i]) {
      this.setState({
        arr: arrCopy,
        historyMoves: historyMovesCopy,
        buttons: buttonsCopy,
        historyXIsNext,
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
              onClick={() => this.setHistoryBoard(buttons.indexOf(button) + 1)}
            >
              {button}
            </button>
          </div>
        ))}
      </div>
    );
  }

  render () {
    const { arr, historyXIsNext } = this.state;
    const xIsNext = historyXIsNext[historyXIsNext.length - 1];
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
        <button
          type="button"
          className="button"
          onClick={() => this.setHistoryBoard(0)}
        >
          Go to game start
        </button>
        {this.MoveButtons()}
      </div>
    );
  }
}

Game.displayName = 'Game';

ReactDOM.render(<Game />, document.getElementById('root'));
