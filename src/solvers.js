/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  if (n === 0) { return []; }
  if (n === 1) { return [[1]]; }

  var solution = [];
  var temp;
  for (var i = 0; i < n; i++) {
    temp = [];
    for (var j = 0; j < n; j++) {
      if (i === j) {
        temp.push(1);
      } else {
        temp.push(0);
      }
    }
    solution.push(temp);
  }
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  //logically for a nxn matrix there can only be 2 solutions;
  return 2;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = []; //fixme

  //console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  var recurseMe = function(x, solvedBoard) {
    x = n || x;
    x = solution || solvedBoard;
    if (n === 0) 

    recurseMe(x-1, solvedBoard);
  };

  return recurseMe();
  //console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
