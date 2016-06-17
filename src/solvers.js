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

/*
findNRooksSolution: O(n^2)
countNRooksSolution: O(n)
findNQueensSolution: O(n^3)
countNQueensSolution: O(n^n)
*/



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
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  if (n === 0) { return []; }
  if (n === 1) { return [[1]]; }
  var solution = [];
  var board = new Board({n: n});
  var found = false;
  
  var recurseMe = function(x, solvedBoard) {
    if ( x === undefined ) { x = n - 1; 
    } else { x = x; }
    solvedBoard = solvedBoard || board;

    if (x === -1 ) {
      found = true;
      return solvedBoard;
    } else {
      for (var i = 0; i < n; i ++) { 
        solvedBoard.togglePiece(x, i);
        if ( !(solvedBoard.hasAnyQueensConflicts()) ) {        
          solvedBoard = recurseMe(x - 1, solvedBoard);
        }
        //prevent the extra rounds checking
        if (found) { return solvedBoard; }
        solvedBoard.togglePiece(x, i);
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
  var solutionCount = 0; //fixme

  if (n === 0 || n === 1) { return 1; }
  var board = new Board({n: n});
  var found = false;
  
  var recurseMe = function(x, solvedBoard) {
    if ( x === undefined ) { x = n - 1; }
    else { x = x; }
    solvedBoard = solvedBoard || board;

    if (x === -1 ) {
      found = true;
      solutionCount++;

      return solvedBoard;
    } else {
      for (var i = 0; i < n; i ++) {
        solvedBoard.togglePiece(x, i);      
        if ( !(solvedBoard.hasAnyQueensConflicts()) ) {        
          solvedBoard = recurseMe(x - 1, solvedBoard);
        }
        solvedBoard.togglePiece(x, i);
        if (found ) {
          found = false;
          return solvedBoard; 
        }  
      }
      return solvedBoard;
    }
  };
  recurseMe();
  return solutionCount;
};
