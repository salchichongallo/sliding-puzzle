import isDeepEqual from 'lodash.isequal';
import isSquareMatrix from 'validate.io-square-matrix';

import { MatrixOffset } from './MatrixOffset';
import { PuzzleMove } from './PuzzleMove.interface';
import { PuzzleSolution } from './PuzzleSolution.interface';

const POINTER_ELEMENT = 0;

export class InvalidMoveError extends Error {}

export class PuzzleNMove implements PuzzleMove {
  constructor(
    private readonly matrix: number[][],
    private readonly offset: MatrixOffset
  ) {}

  static from(matrix: number[][]) {
    if (!isSquareMatrix(matrix)) {
      throw new Error('Only square matrix allowed');
    }

    if (matrix[0].length === 1) {
      throw new Error('Minimum matrix size should be 2x2');
    }

    const matrixSize = matrix[0].length ** 2;
    const uniqueValues = new Set(matrix.flat()).size;
    if (uniqueValues !== matrixSize) {
      throw new Error('Matrix should not contain repeating values');
    }

    let offset: MatrixOffset = null;
    for (let row = 0; row < matrix.length; row++) {
      for (let column = 0; column < matrix[row].length; column++) {
        if (matrix[row][column] === POINTER_ELEMENT) {
          offset = new MatrixOffset(row, column);
        }
      }
    }

    if (!offset) {
      throw new Error('Matrix elements should contain pointer element');
    }

    return new PuzzleNMove(matrix, offset);
  }

  isEqual(move: PuzzleNMove): boolean {
    return isDeepEqual(this.matrix, move.matrix);
  }

  possibleMoves(): PuzzleNMove[] {
    const possibleMoves = [
      this.offset.top(),
      this.offset.right(),
      this.offset.bottom(),
      this.offset.left(),
    ];
    const moves: PuzzleNMove[] = [];
    for (const nextOffset of possibleMoves) {
      const { row, column } = nextOffset;
      if (
        this.matrix[row] !== undefined &&
        this.matrix[row][column] !== undefined
      ) {
        const matrix = this.getMatrix();
        const value = matrix[row][column];
        matrix[row][column] = POINTER_ELEMENT;
        matrix[this.offset.row][this.offset.column] = value;
        moves.push(new PuzzleNMove(matrix, new MatrixOffset(row, column)));
      }
    }
    return moves;
  }

  accept(solution: PuzzleSolution): void {
    solution.add(this);
  }

  getMatrix() {
    return Array.from(this.matrix.map(row => Array.from(row)));
  }

  countMisplaces(move: PuzzleNMove): Number {
    let misplaces = 0;
    const thisMove = this.matrix.flat();
    const otherMove = move.matrix.flat();
    for (let index = 0; index < thisMove.length; index++) {
      if (thisMove[index] !== otherMove[index]) {
        misplaces += 1;
      }
    }
    return misplaces;
  }
}
