import Cell from './cell.js'

export default class Face {
  constructor() {
    this.grid = [Array(3), Array(3), Array(3)]
  }
  printFace() {
    console.log(this.grid[0])
    console.log(this.grid[1])
    console.log(this.grid[2])
  }

  initFace(colour) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        this.grid[i][j] = new Cell(i * 3 + j, colour)
      }
    }
  }

  randomFace() {
    let colours = ['r', 'g', 'b', 'o', 'w', 'y']
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let randomNum = Math.floor(Math.random() * 6)
        this.grid[i][j] = colours[randomNum]
      }
    }
  }

  colour(row, col) {
    let colourCode = ''
    let cell = this.grid[row][col]
    switch (cell.colour) {
      case 'r':
        colourCode = '91'
        break
      case 'g':
        colourCode = '92'
        break
      case 'b':
        colourCode = '94'
        break
      case 'o':
        colourCode = '95'
        break
      case 'w':
        colourCode = '97'
        break
      case 'y':
        colourCode = '93'
        break
    }
    return `\x1b[${colourCode}m■\x1b[0m`
  }

  cell(row, col) {
    let colourCode = ''
    let cell = this.grid[row][col]
    switch (cell.colour) {
      case 'r':
        colourCode = '91'
        break
      case 'g':
        colourCode = '92'
        break
      case 'b':
        colourCode = '94'
        break
      case 'o':
        colourCode = '95'
        break
      case 'w':
        colourCode = '97'
        break
      case 'y':
        colourCode = '93'
        break
    }
    return `\x1b[${colourCode}m${cell.number}\x1b[0m`
  }

  setFace(grid) {
    this.grid = grid
  }

  getRow(num) {
    return this.grid[num]
  }

  setRow(row, cells) {
    this.grid[row][0] = cells[0]
    this.grid[row][1] = cells[1]
    this.grid[row][2] = cells[2]
  }

  getCol(num) {
    return this.grid.map((row) => row[num])
  }

  setCol(col, cells) {
    this.grid[0][col] = cells[0]
    this.grid[1][col] = cells[1]
    this.grid[2][col] = cells[2]
  }

  rotateCw() {
    let topLeft = this.grid[0][0]
    let top = this.grid[1][0]
    this.grid[0][0] = this.grid[2][0]
    this.grid[1][0] = this.grid[2][1]
    this.grid[2][0] = this.grid[2][2]
    this.grid[2][1] = this.grid[1][2]
    this.grid[2][2] = this.grid[0][2]
    this.grid[1][2] = this.grid[0][1]
    this.grid[0][2] = topLeft
    this.grid[0][1] = top
  }

  rotateACw() {
    let topLeft = this.grid[0][0]
    let left = this.grid[0][1]
    this.grid[0][0] = this.grid[0][2]
    this.grid[0][1] = this.grid[1][2]
    this.grid[0][2] = this.grid[2][2]
    this.grid[1][2] = this.grid[2][1]
    this.grid[2][2] = this.grid[2][0]
    this.grid[2][1] = this.grid[1][0]
    this.grid[2][0] = topLeft
    this.grid[1][0] = left
  }
}
