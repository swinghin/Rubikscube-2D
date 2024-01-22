import Cube from './cube.js'

console.log("Rubik's Cube")

const cube = new Cube()

import * as readline from 'node:readline/promises'
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

while (true) {
  console.log()
  cube.print()
  console.log()
  const ans = await rl.question('Enter command: ')
  try {
    handleCommand(ans)
  } catch (e) {
    console.error(e)
    console.log('Invalid command')
  }
}

function handleCommand(cmd) {
  switch (cmd.split(' ')[0]) {
    case 'exit':
    case 'e':
      console.log()
      process.exit()
    case 'rotate':
    case 'r':
      handleRotate(cmd.split(' ')[1])
      break
    case 'spin':
    case 's':
      handleSpin(cmd.split(' ')[1], cmd.split(' ')[2])
      break
    case 'shuffle':
      cube.shuffle()
      break
    default:
      console.log('Invalid command')
  }
}

function handleRotate(dir) {
  switch (dir) {
    case 'left':
    case 'l':
      cube.rotateLeft()
      break
    case 'right':
    case 'r':
      cube.rotateRight()
      break
    case 'up':
    case 'u':
      cube.rotateUp()
      break
    case 'down':
    case 'd':
      cube.rotateDown()
      break
    default:
      console.log('Invalid rotate direction')
  }
}

function handleSpin(dir, index) {
  switch (dir) {
    case 'left':
    case 'l':
      cube.spinLeft(index)
      break
    case 'right':
    case 'r':
      cube.spinRight(index)
      break
    case 'up':
    case 'u':
      cube.spinUp(index)
      break
    case 'down':
    case 'd':
      cube.spinDown(index)
      break
    default:
      console.log('Invalid rotate direction')
  }
}
