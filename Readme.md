# JsPlay Question #2 : 8 Puzzle

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

The `board` property will give the starting board position. The size of the board is always expected to be a square. 

This `puzzle8` function should return an array of consecutive boards, starting with the input board, each element being a step towards the solution. This array should contain the lowest number of steps towards a solution to the given input board. If there are multiple possible shortest solutions to a given input board, the function can return either of them.

To test your implementation, use `test.js` as shown below,

```
$ more puzzle8_03.txt
3
 0  1  3
 4  2  5
 7  8  6

$ node test.js puzzle8_03.txt 
0 1 3
4 2 5
7 8 6

1 0 3
4 2 5
7 8 6

1 2 3
4 0 5
7 8 6

1 2 3
4 5 0
7 8 6

```
As shown above, the output array _should not_ have the final board, but the last board in the array should be one step away from a final board. A reference implementation is already provided in `puzzle8.js`.

There could be cases where the board cannot be solved. In such cases, the function should return `null`. A test example for this is also provided. However, the reference implementation do not cover this case.

```
$ more puzzle8_03_unsolvable.txt 
3
 0  1  3
 4  5  2
 7  8  6

$ node test.js puzzle8_03_unsolvable.txt 
Board cannot be solved

```

If the input board is already solved, then the function should return an empty array,
```
$ more puzzle8_03_solved.txt 
3
 1  2  3
 4  5  6
 7  8  0

$ node test.js puzzle8_03_solved.txt 
[]

```


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
Submission report for anoopelias generated at Fri May 18 2018 01:00:00 GMT+0000 (UTC)

8 Puzzle:

Functional Tests:
Passed : 8 Puzzle should solve a 3x3 board
Passed : 8 Puzzle should return null for a board that cannot be solved
Passed : 8 Puzzle should solve a single element board
Passed : 8 Puzzle should solve a board of size 2
Passed : 8 Puzzle should return empty array for a solved board
Passed : 8 Puzzle should solve size 3 board tests
Passed : 8 Puzzle should solve size 4 board tests
Functional Tests Passed

Performance Tests:
Level 1: Tests with size 3 board
     Time: 2.2383740000004764 milliseconds
Level 2: Tests with size 4 board
     Time: Timeout (>300 ms)
```

Use `leaderboard` to see the current standings,

```
$ ./bin/jsplay leaderboard
Leaderboard at Fri May 18 2018 06:10:03 GMT+0530 (IST)

8 Puzzle:

Level 1
anoopelias Time:0.95 milliseconds

Level 2
anoopelias Time:29.773 milliseconds

```

# References

This problem is inspired from the [8 puzzle assignment](https://www.cs.princeton.edu/courses/archive/spr10/cos226/assignments/8puzzle.html) which is a part of Algorithms course from Princeton. More discussions about solutions are available in the link.

# Testcases

In case there are testcase failures, you can manually run each of the test cases as below and see where you are going wrong,

- 8 Puzzle should solve a 3x3 board
```
    $ node test.js testcase1.txt # Expected output of size 4
```
 - 8 Puzzle should return null for a board that cannot be solved
```
    $ node test.js testcase2.txt # Expected output null
```
 - 8 Puzzle should solve a single element board
```
    $ node test.js testcase3.txt # Expected output empty array ([])
```
 - 8 Puzzle should solve a board of size 2
```
    $ node test.js testcase4.txt # Expected output size 4
```
 - 8 Puzzle should return empty array for a solved board
```
    $ node test.js testcase5.txt # Expected output empty array ([])
```
 - 8 Puzzle should solve size 3 board tests
```
    $ node test.js testcase6_1.txt # Expected output size 4
    $ node test.js testcase6_2.txt # Expected output size 6
    $ node test.js testcase6_3.txt # Expected output size 6
    $ node test.js testcase6_4.txt # Expected output size 8
```
 - 8 Puzzle should solve size 4 board tests
```
    $ node test.js testcase7_1.txt # Expected output size 10
    $ node test.js testcase7_2.txt # Expected output size 6
    $ node test.js testcase7_3.txt # Expected output size 8
    $ node test.js testcase7_4.txt # Expected output size 8
```

