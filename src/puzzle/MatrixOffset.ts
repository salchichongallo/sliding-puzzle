export class MatrixOffset {
  constructor(public readonly row: number, public readonly column: number) {}

  top() {
    return new MatrixOffset(this.row + 1, this.column);
  }

  right() {
    return new MatrixOffset(this.row, this.column + 1);
  }

  bottom() {
    return new MatrixOffset(this.row - 1, this.column);
  }

  left() {
    return new MatrixOffset(this.row, this.column - 1);
  }
}
