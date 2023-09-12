import Cell from "./Cell";

class Grid {
  cells: Cell[][];

  constructor(width: number, height: number) {
    this.cells = [];
    for (let y = 0; y < height; y++) {
      const row: Cell[] = [];
      for (let x = 0; x < width; x++) {
        row.push(new Cell(x, y, width, height));
      }
      this.cells.push(row);
    }
  }

  update(): void {
    const oldCells: Cell[][] = this.cells.map((row) =>
      row.map((cell) => ({ ...cell } as Cell))
    );
    for (const row of this.cells) {
      for (const cell of row) {
        this.cells[cell.y][cell.x].isAlive = cell.getNextStatus(oldCells);
      }
    }
  }
}

export default Grid;
