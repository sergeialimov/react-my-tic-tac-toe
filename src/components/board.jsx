import React from 'react';
import ReactDOM from 'react-dom';
import Square from './square.jsx';

export default class Board extends React.Component {
  renderSquare () {
    return (
      <Square value="1-1111" />
    );
  }

  render () {
    return (
      <div className="board">
        <div className="row">
          <div className="square">
            {this.renderSquare()}
          </div>
        </div>
      </div>
    );
  }
}

Board.displayName = 'Board';


ReactDOM.render(<Board />, document.getElementById('root'));
