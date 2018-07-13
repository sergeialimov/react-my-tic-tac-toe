exports.whoWin = (arr) => {
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

  if (!arr.includes(null) && !arr.includes(undefined) && !result) {
    result = 'nobody';
  }
  return result;
};
