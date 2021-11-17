import { PuzzleMove } from './PuzzleMove.interface';
import { PuzzleSolution } from './PuzzleSolution.interface';

export class PuzzleNSolver {
  constructor(private readonly solution: PuzzleSolution) {}

  solve(initialMove: PuzzleMove, goalMove: PuzzleMove): void {
    let move = initialMove;
    while (move.countMisplaces(goalMove) > 0) {
      let nextStep: PuzzleMove;
      for (const step of move.possibleMoves()) {
        if (!nextStep) {
          nextStep = step;
        }
        if (step.countMisplaces(goalMove) < nextStep.countMisplaces(goalMove)) {
          nextStep = step;
        }
      }
      move = nextStep;
      this.solution.add(move);
    }
  }
}
