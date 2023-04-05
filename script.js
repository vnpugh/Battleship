var countBattleships = function(board) {
  let count = 0;
  const rows = board.length;
  const columns = board[0].length;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (board[i][j] === 'X' &&
          (j === 0 || board[i][j - 1] !== 'X') &&
          (i === rows - 1 || board[i + 1][j] !== 'X')) {
        count += 1;
      }
    }
  }
  return count;
};
