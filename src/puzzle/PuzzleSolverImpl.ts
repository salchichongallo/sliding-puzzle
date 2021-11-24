import { PuzzleStep } from './PuzzleStep.interface';

export class PuzzleSolverImpl {
  solve(initialStep: PuzzleStep, goalStep: PuzzleStep) {
    let queue: PuzzleStep[] = [initialStep];
    const cache = new Set([initialStep.hash()]);
    while (queue.length) {
      queue.sort((a, b) => a.heuristic(goalStep) - b.heuristic(goalStep));

      const step = queue.shift();
      if (step.isEqual(goalStep)) {
        return step;
      }

      for (const nextStep of step.possibleMoves()) {
        if (!cache.has(nextStep.hash())) {
          queue.unshift(nextStep);
          cache.add(nextStep.hash());
        }
      }
    }
  }
}
