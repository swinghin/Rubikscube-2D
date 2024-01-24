# Rubik's Cube 2D

A command-line 2D representation of a Rubik's Cube written in NodeJS.

## How to run

Run with NodeJS with command `node player` .

## Commands

### Shuffle

Use the `shuffle` command the let the program shuffle the cube by performing 10 random moves.

### Rotate

Rotate the Rubik's Cube up/down/left/right in relation the the front view by using the `rotate` command followed by the direction. 

The shorthand for the `rotate` command is `r`, and shorthand for directions are `l` for left, `r` for right, `u` for up, and `d` for down.

Examples:

`rotate left` rotates the cube to the left

`r d` uses the shorthands and rotates the cube downwards

### Spin

Spin a specified row or column relative to the front of the cube by using the `spin` command followed by the direction and the row index.

The shorthand for the `spin` command is `s`, and shorthand for directions are `l` for left, `r` for right, `u` for up, and `d` for down. The index should be 0, 1, or 2.

Examples:

`spin left 0` spins the top row to the left

`s d 1` uses the shorthands and spins the middle column downwards

### Exit

Use the `exit` command, the shorthand `e`, or use your platform equivalent program termination key combination (e.g.`Ctrl-C`) to exit.