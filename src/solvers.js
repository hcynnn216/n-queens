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
  var solutionCount;
  var factorial = function(a) {
    return a <= 1 ? 1 : factorial(a - 1) * a;
  };
  solutionCount = factorial(n);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  if (n === 0) { return []; }
  if (n === 1) { return [[1]]; }
  var solution = [];
  var board = new Board({n: n});

  var found = false;
  
  var showBoard = [];

  var recurseMe = function(x, solvedBoard) {
    if ( x === undefined ) { x = n - 1; }
    else { x = x; }
    solvedBoard = solvedBoard || board;
    if (x === -1 ) {
      found = true;
      return solvedBoard;
    } else {
      for (var i = 0; i < n; i ++) {
        var temp = solvedBoard.get(x);
        temp[i] = 1;
        solvedBoard.set(x, temp);      
        if ( !(solvedBoard.hasAnyColConflicts() || solvedBoard.hasAnyRowConflicts() || 
            solvedBoard.hasAnyMajorDiagonalConflicts() || solvedBoard.hasAnyMinorDiagonalConflicts())) {        
          solvedBoard = recurseMe(x - 1, solvedBoard);
        }
        //prevent the extra rounds checking
        if (found) { return solvedBoard; }
        temp[i] = 0;
        solvedBoard.set(x, temp);
      }
      return solvedBoard;
    }
  };

  board = recurseMe();
  for (var b = 0; b < n; b++) {
    solution.push(board.get(b));
  }
  return solution;
};



// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
