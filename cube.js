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
      `        ${this.up.colour(0, 0)} ${this.up.colour(0, 1)} ${this.up.colour(
        0,
        2
      )}`
    )
    console.log(
      `        ${this.up.colour(1, 0)} ${this.up.colour(1, 1)} ${this.up.colour(
        1,
        2
      )}`
    )
    console.log(
      `        ${this.up.colour(2, 0)} ${this.up.colour(2, 1)} ${this.up.colour(
        2,
        2
      )}\n`
    )
    console.log(
      `${this.left.colour(0, 0)} ${this.left.colour(0, 1)} ${this.left.colour(
        0,
        2
      )}   ${this.front.colour(0, 0)} ${this.front.colour(
        0,
        1
      )} ${this.front.colour(0, 2)}   ${this.right.colour(
        0,
        0
      )} ${this.right.colour(0, 1)} ${this.right.colour(
        0,
        2
      )}   ${this.back.colour(0, 0)} ${this.back.colour(
        0,
        1
      )} ${this.back.colour(0, 2)}`
    )
    console.log(
      `${this.left.colour(1, 0)} ${this.left.colour(1, 1)} ${this.left.colour(
        1,
        2
      )}   ${this.front.colour(1, 0)} ${this.front.colour(
        1,
        1
      )} ${this.front.colour(1, 2)}   ${this.right.colour(
        1,
        0
      )} ${this.right.colour(1, 1)} ${this.right.colour(
        1,
        2
      )}   ${this.back.colour(1, 0)} ${this.back.colour(
        1,
        1
      )} ${this.back.colour(1, 2)}`
    )
    console.log(
      `${this.left.colour(2, 0)} ${this.left.colour(2, 1)} ${this.left.colour(
        2,
        2
      )}   ${this.front.colour(2, 0)} ${this.front.colour(
        2,
        1
      )} ${this.front.colour(2, 2)}   ${this.right.colour(
        2,
        0
      )} ${this.right.colour(2, 1)} ${this.right.colour(
        2,
        2
      )}   ${this.back.colour(2, 0)} ${this.back.colour(
        2,
        1
      )} ${this.back.colour(2, 2)}\n`
    )

    console.log(
      `        ${this.down.colour(0, 0)} ${this.down.colour(
        0,
        1
      )} ${this.down.colour(0, 2)}`
    )
    console.log(
      `        ${this.down.colour(1, 0)} ${this.down.colour(
        1,
        1
      )} ${this.down.colour(1, 2)}`
    )
    console.log(
      `        ${this.down.colour(2, 0)} ${this.down.colour(
        2,
        1
      )} ${this.down.colour(2, 2)}`
    )
  }

  printNum() {
    console.log(
      `        ${this.up.cell(0, 0)} ${this.up.cell(0, 1)} ${this.up.cell(
        0,
        2
      )}`
    )
    console.log(
      `        ${this.up.cell(1, 0)} ${this.up.cell(1, 1)} ${this.up.cell(
        1,
        2
      )}`
    )
    console.log(
      `        ${this.up.cell(2, 0)} ${this.up.cell(2, 1)} ${this.up.cell(
        2,
        2
      )}\n`
    )
    console.log(
      `${this.left.cell(0, 0)} ${this.left.cell(0, 1)} ${this.left.cell(
        0,
        2
      )}   ${this.front.cell(0, 0)} ${this.front.cell(0, 1)} ${this.front.cell(
        0,
        2
      )}   ${this.right.cell(0, 0)} ${this.right.cell(0, 1)} ${this.right.cell(
        0,
        2
      )}   ${this.back.cell(0, 0)} ${this.back.cell(0, 1)} ${this.back.cell(
        0,
        2
      )}`
    )
    console.log(
      `${this.left.cell(1, 0)} ${this.left.cell(1, 1)} ${this.left.cell(
        1,
        2
      )}   ${this.front.cell(1, 0)} ${this.front.cell(1, 1)} ${this.front.cell(
        1,
        2
      )}   ${this.right.cell(1, 0)} ${this.right.cell(1, 1)} ${this.right.cell(
        1,
        2
      )}   ${this.back.cell(1, 0)} ${this.back.cell(1, 1)} ${this.back.cell(
        1,
        2
      )}`
    )
    console.log(
      `${this.left.cell(2, 0)} ${this.left.cell(2, 1)} ${this.left.cell(
        2,
        2
      )}   ${this.front.cell(2, 0)} ${this.front.cell(2, 1)} ${this.front.cell(
        2,
        2
      )}   ${this.right.cell(2, 0)} ${this.right.cell(2, 1)} ${this.right.cell(
        2,
        2
      )}   ${this.back.cell(2, 0)} ${this.back.cell(2, 1)} ${this.back.cell(
        2,
        2
      )}\n`
    )

    console.log(
      `        ${this.down.cell(0, 0)} ${this.down.cell(0, 1)} ${this.down.cell(
        0,
        2
      )}`
    )
    console.log(
      `        ${this.down.cell(1, 0)} ${this.down.cell(1, 1)} ${this.down.cell(
        1,
        2
      )}`
    )
    console.log(
      `        ${this.down.cell(2, 0)} ${this.down.cell(2, 1)} ${this.down.cell(
        2,
        2
      )}`
    )
  }

  spinLeft(row) {
    // console.log(`Spin Left ${row}`)
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

  spinRight(row) {
    // console.log(`Spin Right ${row}`)
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

  spinUp(col) {
    // console.log(`Spin Up ${col}`)
    if (col == 0) {
      this.left.rotateACw()
    }
    if (col == 2) {
      this.right.rotateCw()
    }
    let tempFrontCol = this.front.getCol(col).slice()
    this.front.setCol(col, this.down.getCol(col))
    this.down.setCol(col, this.back.getCol(col).reverse())
    this.back.setCol(col, this.up.getCol(col).reverse())
    this.up.setCol(col, tempFrontCol)
  }

  spinDown(col) {
    // console.log(`Spin Down ${col}`)
    if (col == 0) {
      this.left.rotateCw()
    }
    if (col == 2) {
      this.right.rotateACw()
    }
    let tempFrontCol = this.front.getCol(col).slice()
    this.front.setCol(col, this.up.getCol(col))
    this.up.setCol(col, this.back.getCol(col).reverse())
    this.back.setCol(col, this.down.getCol(col).reverse())
    this.down.setCol(col, tempFrontCol)
  }

  rotateLeft() {
    // console.log('Rotate View Left')
    let frontGrid = this.front.grid.slice()
    this.front.setFace(this.right.grid)
    this.right.setFace(this.back.grid)
    this.back.setFace(this.left.grid)
    this.left.setFace(frontGrid)
    this.up.rotateCw()
    this.down.rotateACw()
  }

  rotateRight() {
    // console.log('Rotate View Right')
    let frontGrid = this.front.grid.slice()
    this.front.setFace(this.left.grid)
    this.left.setFace(this.back.grid)
    this.back.setFace(this.right.grid)
    this.right.setFace(frontGrid)
    this.up.rotateACw()
    this.down.rotateCw()
  }

  rotateUp() {
    // console.log('Rotate View Up')
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

  rotateDown() {
    // console.log('Rotate View Down')
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

  shuffle() {
    let randomMove = -1
    let randomIndex = -1
    let moves = [
      'spinLeft',
      'spinRight',
      'spinUp',
      'spinDown',
      'rotateLeft',
      'rotateRight',
      'rotateUp',
      'rotateDown',
    ]
    for (var i = 0; i < 10; i++) {
      randomMove = Math.floor(Math.random() * 8)
      randomIndex = Math.floor(Math.random() * 3)
      if (randomMove < 4) {
        eval(`this.${moves[randomMove]}(${randomIndex})`)
      } else {
        eval(`this.${moves[randomMove]}()`)
      }
    }
  }
}
