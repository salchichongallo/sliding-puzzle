import { PuzzleSolverImpl } from '../PuzzleSolverImpl';
import { PuzzleStepImpl } from '../PuzzleStepImpl';

test('demo', () => {
  const solver = new PuzzleSolverImpl();
  const initialStep = new PuzzleStepImpl(
    [8, 7, 6, 0, 4, 1, 2, 5, 3],
    null,
    null
  );
  const goalStep = new PuzzleStepImpl([1, 2, 3, 4, 5, 6, 7, 8, 0], null, null);
  const step = solver.solve(initialStep, goalStep);
});
