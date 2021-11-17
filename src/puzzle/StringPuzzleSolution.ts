import { PuzzleNMove } from './PuzzleNMove';
import { PuzzleSolution } from './PuzzleSolution.interface';

export class StringPuzzleSolution implements PuzzleSolution {
  private readonly steps: PuzzleNMove[] = [];

  add(step: PuzzleNMove) {
    this.steps.push(step);
  }

  toString() {
    return this.steps.reduce((allString, step) => {
      let string = '';
      const matrix = step.getMatrix();
      const spaces = matrix.length - 1;
      for (const row of matrix) {
        string += row.join(''.padStart(spaces, ' '));
        string += '\n';
      }
      return allString + string + '\n';
    }, '');
  }
}
