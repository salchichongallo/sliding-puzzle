import { PuzzleMove } from '../PuzzleMove.interface';
import { PuzzleNMove } from '../PuzzleNMove';
import { PuzzleNSolver } from '../PuzzleNSolver';
import { PuzzleSolution } from '../PuzzleSolution.interface';

// class DummySolution implements PuzzleSolution {
//   public readonly moves: PuzzleNMove[] = []
//   visit(move: PuzzleNMove): void {
//     this.moves.push(move);
//   }
// }

test('initial move is the solution', () => {
  const solution: PuzzleSolution = { add: jest.fn() };
  const solver = new PuzzleNSolver(solution as any as PuzzleSolution);
  const startMove = PuzzleNMove.from([
    [1, 2],
    [0, 3],
  ]);
  const goalMove = PuzzleNMove.from([
    [1, 2],
    [3, 0],
  ]);
  solver.solve(startMove, goalMove);
  expect(solution.add).toHaveBeenCalledTimes(1);
  expect(solution.add).toHaveBeenCalledWith(goalMove);
});

test('two steps required', () => {
  const startMove = PuzzleNMove.from([
    [0, 2],
    [1, 3],
  ]);
  const intermediateStep = PuzzleNMove.from([
    [1, 2],
    [0, 3],
  ]);
  const goalMove = PuzzleNMove.from([
    [1, 2],
    [3, 0],
  ]);
  const solution: PuzzleSolution = { add: jest.fn() };
  const solver = new PuzzleNSolver(solution as any as PuzzleSolution);
  solver.solve(startMove, goalMove);
  expect(solution.add).toHaveBeenCalledTimes(2);
  expect(solution.add).toHaveBeenCalledWith(intermediateStep);
});

test.only('3x3', () => {
  const initialMove = PuzzleNMove.from([
    [1, 2, 3],
    [0, 4, 6],
    [7, 5, 8],
  ]);
  const goalMove = PuzzleNMove.from([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 0],
  ]);
  const steps = [
    PuzzleNMove.from([
      [1, 2, 3],
      [4, 0, 6],
      [7, 5, 8],
    ]),
    PuzzleNMove.from([
      [1, 2, 3],
      [4, 5, 6],
      [7, 0, 8],
    ]),
    goalMove,
  ];
  const solution: PuzzleSolution = { add: jest.fn() };
  const solver = new PuzzleNSolver(solution as any as PuzzleSolution);
  solver.solve(initialMove, goalMove);
  expect(solution.add).toHaveBeenCalledTimes(3);
  expect(solution.add).toHaveBeenNthCalledWith(1, steps[0]);
  expect(solution.add).toHaveBeenNthCalledWith(2, steps[1]);
  expect(solution.add).toHaveBeenNthCalledWith(3, steps[2]);
});
