Write a program to recognize line patterns in a given set of points.

The problem: Given a set of n distinct points in the plane, find every (maximal)
line segment that connects a subset of 4 or more of the points.

1. Development
Start by editing `collinear.js`. This function should export a
function `collinear` which has exactly one parameter, say `input`. The
structure of `input` is as follows,

input = {
    length: <number of points>
    points: [{
        x: <x of p1>,
        y: <y of p1>,
    }, {
        x: <x of p2>,
        y: <y of p2>,
    }, {
        ...
    }]
}

This function should return an array of lines each line containing two points
representing either ends of the line. An example as shown below,

output = [[{
        x: <x of starting point of line 1>,
        y: <y of starting point of line 1>,
    }, {
        x: <x of ending point of line 1>,
        y: <y of ending point of line 1>,
    }], [{
        x: <x of starting point of line 2>,
        y: <y of starting point of line 2>,
    }, {
        x: <x of ending point of line 2>,
        y: <y of ending point of line 2>,
    }], [
        ...
    ]
]

The lines can be in any arbitrary order, but you should make sure
that all and only the lines are there in the output. Also a line should not
appear twice.

Similarly, the 'starting point' and 'ending point' of a line can be in any order.
For example, if the starting point of a line is P1 and ending point is P2,
you can output either [P1, P2] or [P2, P1].

Several input examples are available in this repo, some of them are
mentioned below,

$ more inputY.txt
7
5, 5
10, 0
7, 7
0, 10
12, 12
3, 7
10, 10

  |
  |           x
  |
  x         x
  |
  |
  |  x   x
  |
  |    x
  |
  |
  |
  |
  |---------x------

$ node test.js inputY.txt
[ [ { x: 0, y: 10 }, { x: 10, y: 0 } ],
  [ { x: 12, y: 12 }, { x: 5, y: 5 } ] ]

Note: The outputs are only indicative since you can change the order
of lines or points.

$ node test.js input8.txt
[ [  { x: 0, y: 10 },  { x: 10, y: 0 } ],
  [  { x: 20, y: 21 },  { x: 3, y: 4 } ] ]

$ node test.js inputThreePointer.txt
[]

$ node test.js inputVertical.txt
[ [  { x: 3, y: 10 },  { x: 3, y: 4 } ] ]

$ node test.js inputHorizontal.txt
[ [  { x: 20, y: 0 },  { x: 3, y: 0 } ] ]

$ node test.js inputFivePoints.txt
[ [ Point { x: -2, y: 12 }, Point { x: 10, y: 0 } ] ]

2. Submission
Once you have completed the development, you can submit your program as below,

Use 'ping' to make sure server is up and running
$ ./bin/jsplay ping
Response to ping at Mon Feb 19 2018 02:03:40 GMT+0000 (UTC)

Use 'submit' to submit your program to the server. The server will evaluate your
program and respond to your request.

$ ./bin/jsplay submit

Functional Tests:
Passed : Collinear should find either ends of a collinear points line segment
Passed : Collinear should not a find a line unless there are four collinear points in it
Passed : Collinear should find vertical line
Passed : Collinear should find horizontal line
Passed : Collinear should find either ends of a 5 point collinearity
Passed : Collinear should find two lines going through a point
Functional Tests Passed

Performance Tests:
Tests with 150 points
     Time: 9534 milliseconds

