import React from 'react';
import ReactDOM from 'react-dom';
import Square from '../square/square.jsx';
import './board.css';

export default class Board extends React.Component {
  renderSquare (num) {
    return (
      <Square value={num} />
    );
  }

  render () {
    return (
      <div className="board">
        <div className="row">
          <div className="square">
            {this.renderSquare(0)}
          </div>
          <div className="square">
            {this.renderSquare(1)}
          </div>
          <div className="square">
            {this.renderSquare(2)}
          </div>
        </div>
        <div className="row">
          <div className="square">
            {this.renderSquare(3)}
          </div>
          <div className="square">
            {this.renderSquare(4)}
          </div>
          <div className="square">
            {this.renderSquare(5)}
          </div>
        </div>
        <div className="row">
          <div className="square">
            {this.renderSquare(6)}
          </div>
          <div className="square">
            {this.renderSquare(7)}
          </div>
          <div className="square">
            {this.renderSquare(8)}
          </div>
        </div>
      </div>
    );
  }
}

Board.displayName = 'Board';


ReactDOM.render(<Board />, document.getElementById('root'));
