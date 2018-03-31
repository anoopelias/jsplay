#JsPlay Question #2 : 8 Puzzle

Write a program to solve the 8-puzzle problem and its natural generalizations.

![8 Puzzle](http://www.bestqualitytoys.com/files/images/thinkfunlarge/5853.jpg "8 Puzzle")

## The problem
The 8-puzzle problem is played on a 3-by-3 grid with 8 square blocks labeled 1 through 8 and a blank square. Your goal is to rearrange the blocks so that they are in order. You are permitted to slide blocks horizontally or vertically into the blank square. The following shows a sequence of legal moves from an initial board position (left) to the goal position (right). 

```
    1  3        1     3        1  2  3        1  2  3        1  2  3
 4  2  5   =>   4  2  5   =>   4     5   =>   4  5      =>   4  5  6
 7  8  6        7  8  6        7  8  6        7  8  6        7  8 

 initial                                                      goal
```

## Getting Started
Start by editing `puzzle8.js`. This file should export a function `puzzle8` which has exactly one parameter, say `input`. The
structure of `input` is as follows,

```
input = {
    length: <size of the board>
    board: [
    	[n00, n01, n02.. ],
    	[n10, n11, n12.. ],
    	[n20, n21, n22.. ],
    	...
    ]
}
```

The `board` property will give the starting board position. The size of the board is always expected to be a square. This function should return an array of consecutive boards, each of which if executed will give a solution to the 8-puzzle problem.

To test your implementation, use `test.js` as shown below,

```
$ more puzzle04.txt
3
 0  1  3
 4  2  5
 7  8  6

$ node test.js puzzle04.txt 
0 1 3
4 2 5
7 8 6
[ [ [ 0, 1, 3 ], [ 4, 2, 5 ], [ 7, 8, 6 ] ],
  [ [ 1, 0, 3 ], [ 4, 2, 5 ], [ 7, 8, 6 ] ],
  [ [ 1, 2, 3 ], [ 4, 0, 5 ], [ 7, 8, 6 ] ],
  [ [ 1, 2, 3 ], [ 4, 5, 0 ], [ 7, 8, 6 ] ] ]

```
 The output should start with the initial position. Consecutive boards should be neighbors to each other, and the last board must be 1 step away from the final board. You _should not_ add the final board into the output. A reference implementation is already provided in puzzle8.js.

 There could be cases where the board cannot be solved. In such cases, the function should return `null`.

## Submission
Once you have completed the development, you can submit your program as below,

Use `ping` to make sure server is up and running

```
$ ./bin/jsplay ping
Response to ping for anoopelias at Sun Apr 01 2018 04:33:13 GMT+0530 (IST)
```

Use `submit` to submit your program to the server. The server will evaluate your
program and respond to your request.

```
$ ./bin/jsplay submit

Submission report for anoopelias generated at Sun Apr 01 2018 04:35:13 GMT+0530 (IST)

8 Puzzle:

Functional Tests:
Passed : 8 Puzzle should solve a 3x3 board
Passed : 8 Puzzle should return null for a board that cannot be solved
Passed : 8 Puzzle Solve a single element board
Passed : 8 Puzzle should solve a board of size 2
Passed : 8 Puzzle should return empty array for a solved board
Passed : 8 Puzzle should solve size 3 board tests
Passed : 8 Puzzle should solve size 4 board tests
Functional Tests Passed

Performance Tests:
Tests with size 4 board with 20 shuffles
     Time: 18.095936 milliseconds

```