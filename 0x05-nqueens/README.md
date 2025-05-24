# N queens

The N queens puzzle is a challenge of placing N non-attacking queens on an NxN chessboard.

On a chessboard, the queen can move any number of squares vertically, horizontally
or diagonally.Thus, to solve the puzzle, each queen must be placed on its own
row, column and diagonal.

## Usage

```nqueens N```
where N is the number of queens.
      - N must be an integer greater or equal to 4
      - the program prints every possible solution to the problem in the format
        shown below
```
$ ./0-nqueens 4
[[0, 1], [1, 3], [2, 0], [3, 2]]
[[0, 2], [1, 0], [2, 3], [3, 1]]
```
Each inner list represents the coordinates of a queen in the NxN chessboard.
