import Face from './face.js'

export default class Cube {
  constructor() {
    this.front = new Face()
    this.front.initFace('r')
    this.back = new Face()
    this.back.initFace('o')
    this.up = new Face()
    this.up.initFace('w')
    this.down = new Face()
    this.down.initFace('y')
    this.left = new Face()
    this.left.initFace('g')
    this.right = new Face()
    this.right.initFace('b')
  }

  print() {
    console.log(
      `      ${this.up.getColour(0, 0)} ${this.up.getColour(
        0,
        1
      )} ${this.up.getColour(0, 2)}`
    )
    console.log(
      `      ${this.up.getColour(1, 0)} ${this.up.getColour(
        1,
        1
      )} ${this.up.getColour(1, 2)}`
    )
    console.log(
      `      ${this.up.getColour(2, 0)} ${this.up.getColour(
        2,
        1
      )} ${this.up.getColour(2, 2)}`
    )
    console.log(
      `${this.left.getColour(0, 0)} ${this.left.getColour(
        0,
        1
      )} ${this.left.getColour(0, 2)} ${this.front.getColour(
        0,
        0
      )} ${this.front.getColour(0, 1)} ${this.front.getColour(
        0,
        2
      )} ${this.right.getColour(0, 0)} ${this.right.getColour(
        0,
        1
      )} ${this.right.getColour(0, 2)} ${this.back.getColour(
        0,
        0
      )} ${this.back.getColour(0, 1)} ${this.back.getColour(0, 2)} `
    )
    console.log(
      `${this.left.getColour(1, 0)} ${this.left.getColour(
        1,
        1
      )} ${this.left.getColour(1, 2)} ${this.front.getColour(
        1,
        0
      )} ${this.front.getColour(1, 1)} ${this.front.getColour(
        1,
        2
      )} ${this.right.getColour(1, 0)} ${this.right.getColour(
        1,
        1
      )} ${this.right.getColour(1, 2)} ${this.back.getColour(
        1,
        0
      )} ${this.back.getColour(1, 1)} ${this.back.getColour(1, 2)} `
    )
    console.log(
      `${this.left.getColour(2, 0)} ${this.left.getColour(
        2,
        1
      )} ${this.left.getColour(2, 2)} ${this.front.getColour(
        2,
        0
      )} ${this.front.getColour(2, 1)} ${this.front.getColour(
        2,
        2
      )} ${this.right.getColour(2, 0)} ${this.right.getColour(
        2,
        1
      )} ${this.right.getColour(2, 2)} ${this.back.getColour(
        2,
        0
      )} ${this.back.getColour(2, 1)} ${this.back.getColour(2, 2)} `
    )

    console.log(
      `      ${this.down.getColour(0, 0)} ${this.down.getColour(
        0,
        1
      )} ${this.down.getColour(0, 2)}`
    )
    console.log(
      `      ${this.down.getColour(1, 0)} ${this.down.getColour(
        1,
        1
      )} ${this.down.getColour(1, 2)}`
    )
    console.log(
      `      ${this.down.getColour(2, 0)} ${this.down.getColour(
        2,
        1
      )} ${this.down.getColour(2, 2)}`
    )
  }

  printNum() {
    console.log(
      `      ${this.up.getColourNum(0, 0)} ${this.up.getColourNum(
        0,
        1
      )} ${this.up.getColourNum(0, 2)}`
    )
    console.log(
      `      ${this.up.getColourNum(1, 0)} ${this.up.getColourNum(
        1,
        1
      )} ${this.up.getColourNum(1, 2)}`
    )
    console.log(
      `      ${this.up.getColourNum(2, 0)} ${this.up.getColourNum(
        2,
        1
      )} ${this.up.getColourNum(2, 2)}`
    )
    console.log(
      `${this.left.getColourNum(0, 0)} ${this.left.getColourNum(
        0,
        1
      )} ${this.left.getColourNum(0, 2)} ${this.front.getColourNum(
        0,
        0
      )} ${this.front.getColourNum(0, 1)} ${this.front.getColourNum(
        0,
        2
      )} ${this.right.getColourNum(0, 0)} ${this.right.getColourNum(
        0,
        1
      )} ${this.right.getColourNum(0, 2)} ${this.back.getColourNum(
        0,
        0
      )} ${this.back.getColourNum(0, 1)} ${this.back.getColourNum(0, 2)} `
    )
    console.log(
      `${this.left.getColourNum(1, 0)} ${this.left.getColourNum(
        1,
        1
      )} ${this.left.getColourNum(1, 2)} ${this.front.getColourNum(
        1,
        0
      )} ${this.front.getColourNum(1, 1)} ${this.front.getColourNum(
        1,
        2
      )} ${this.right.getColourNum(1, 0)} ${this.right.getColourNum(
        1,
        1
      )} ${this.right.getColourNum(1, 2)} ${this.back.getColourNum(
        1,
        0
      )} ${this.back.getColourNum(1, 1)} ${this.back.getColourNum(1, 2)} `
    )
    console.log(
      `${this.left.getColourNum(2, 0)} ${this.left.getColourNum(
        2,
        1
      )} ${this.left.getColourNum(2, 2)} ${this.front.getColourNum(
        2,
        0
      )} ${this.front.getColourNum(2, 1)} ${this.front.getColourNum(
        2,
        2
      )} ${this.right.getColourNum(2, 0)} ${this.right.getColourNum(
        2,
        1
      )} ${this.right.getColourNum(2, 2)} ${this.back.getColourNum(
        2,
        0
      )} ${this.back.getColourNum(2, 1)} ${this.back.getColourNum(2, 2)} `
    )

    console.log(
      `      ${this.down.getColourNum(0, 0)} ${this.down.getColourNum(
        0,
        1
      )} ${this.down.getColourNum(0, 2)}`
    )
    console.log(
      `      ${this.down.getColourNum(1, 0)} ${this.down.getColourNum(
        1,
        1
      )} ${this.down.getColourNum(1, 2)}`
    )
    console.log(
      `      ${this.down.getColourNum(2, 0)} ${this.down.getColourNum(
        2,
        1
      )} ${this.down.getColourNum(2, 2)}`
    )
  }

  rotateRowCw(row) {
    if (row == 0) {
      this.up.rotateACw()
    }
    if (row == 2) {
      this.down.rotateCw()
    }
    let tempFrontRow = this.front.getRow(row).slice()
    this.front.setRow(row, this.left.getRow(row))
    this.left.setRow(row, this.back.getRow(row))
    this.back.setRow(row, this.right.getRow(row))
    this.right.setRow(row, tempFrontRow)
  }
  rotateRowACw(row) {
    if (row == 0) {
      this.up.rotateCw()
    }
    if (row == 2) {
      this.down.rotateACw()
    }
    let tempFrontRow = this.front.getRow(row).slice()
    this.front.setRow(row, this.right.getRow(row))
    this.right.setRow(row, this.back.getRow(row))
    this.back.setRow(row, this.left.getRow(row))
    this.left.setRow(row, tempFrontRow)
  }

  rotateViewRight() {
    console.log('Rotate View Right')
    let frontGrid = this.front.grid.slice()
    this.front.setFace(this.left.grid)
    this.left.setFace(this.back.grid)
    this.back.setFace(this.right.grid)
    this.right.setFace(frontGrid)
    this.up.rotateACw()
    this.down.rotateCw()
  }

  rotateViewLeft() {
    console.log('Rotate View Left')
    let frontGrid = this.front.grid.slice()
    this.front.setFace(this.right.grid)
    this.right.setFace(this.back.grid)
    this.back.setFace(this.left.grid)
    this.left.setFace(frontGrid)
    this.up.rotateCw()
    this.down.rotateACw()
  }

  rotateViewUp() {
    console.log('Rotate View Up')
    let frontGrid = this.front.grid.slice()
    this.front.setFace(this.down.grid)
    this.left.rotateACw()
    this.right.rotateCw()
    this.down.setFace(this.back.grid)
    this.down.rotateACw()
    this.down.rotateACw()
    this.back.setFace(this.up.grid)
    this.back.rotateCw()
    this.back.rotateCw()
    this.up.setFace(frontGrid)
  }
  rotateViewDown() {
    console.log('Rotate View Down')
    let frontGrid = this.front.grid.slice()
    this.front.setFace(this.up.grid)
    this.left.rotateCw()
    this.right.rotateACw()
    this.up.setFace(this.back.grid)
    this.up.rotateACw()
    this.up.rotateACw()
    this.back.setFace(this.down.grid)
    this.back.rotateCw()
    this.back.rotateCw()
    this.down.setFace(frontGrid)
  }
}
