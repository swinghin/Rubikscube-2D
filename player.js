import Cube from './cube.js'

console.log("Rubik's Cube")

const cube = new Cube()

import * as readline from 'node:readline/promises'
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

while (true) {
  cube.print()
  const ans = await rl.question('Enter command: ')
  try {
    switch (ans.split(' ')[0]) {
      case 'exit':
        process.exit()
      case 'rotate':
      case 'r':
        handleRotate(ans.split(' ')[1])
        break
      case 'spin':
      case 's':
        console.log('spin')
        break
      default:
        console.log('Invalid command')
    }
  } catch {
    console.log('Invalid command')
  }
}

function handleRotate(dir) {
  switch (dir) {
    case 'left':
    case 'l':
      cube.rotateViewLeft()
      break
    case 'right':
    case 'r':
      cube.rotateViewRight()
      break
    case 'up':
    case 'u':
      cube.rotateViewUp()
      break
    case 'down':
    case 'd':
      cube.rotateViewDown()
      break
    default:
      console.log('Invalid rotate direction')
  }
}
