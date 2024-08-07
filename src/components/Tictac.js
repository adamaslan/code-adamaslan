import React, { useState } from 'react';
import styled from 'styled-components';

const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 50px);
  grid-gap: 5px;
`;

const Cell = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid black;
  display: inline-block;
  text-align: center;
  line-height: 50px;
  font-size: 24px;
  cursor: pointer;
`;



function TicTacToe() {
  const [board, setBoard] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [winner, setWinner] = useState(null);
  const players = ['X', 'O'];

  const checkWin = () => {
    // Check rows
    for (let i = 0; i < 3; i++) {
      if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== '') {
        setWinner(board[i][0]);
        return true;
      }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
      if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== '') {
        setWinner(board[0][i]);
        return true;
      }
    }

    // Check diagonals
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== '') {
      setWinner(board[0][0]);
      return true;
    }
    if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== '') {
      setWinner(board[0][2]);
      return true;
    }

    return false;
  };

  const makeMove = (row, col) => {
    if (board[row][col] !== '') {
      return;
    }

    const newBoard = [...board];
    newBoard[row][col] = players[currentPlayer];
    setBoard(newBoard);

    if (checkWin()) {
      return;
    }

    setCurrentPlayer((currentPlayer + 1) % 2);
  };

  const handleCellClick = (row, col) => {
    if (winner) {
      return;
    }
    makeMove(row, col);
  };

  const resetGame = () => {
    setBoard([
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ]);
    setCurrentPlayer(0);
    setWinner(null);
  };

  const renderBoard = () => {
    return (
     
      <Board>
       
        {board.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            {row.map((cell, colIndex) => (
              <Cell
                key={colIndex}
                onClick={() => handleCellClick(rowIndex, colIndex)}
                className={cell ? `cell ${cell}` : 'cell'}
              >
                {cell}
              </Cell>
            ))}
          </React.Fragment>
        ))}
      </Board>
    );
  };

  return (
    <div>
      {renderBoard()}
      {winner && <h2>Winner: {winner}</h2>}
      <button onClick={resetGame}>Reset Game</button>
    </div>
  );
}

export default TicTacToe;
