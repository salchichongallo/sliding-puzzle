import { PuzzleNMove } from 'puzzle/PuzzleNMove';
import { PuzzleSolution } from 'puzzle/PuzzleSolution.interface';

const matrix2x2 = [
  [1, 2],
  [3, 0],
];

describe('from() method factory', () => {
  it('should return an instance', () => {
    const move = PuzzleNMove.from(matrix2x2);
    expect(move).toBeInstanceOf(PuzzleNMove);
    expect(move.getMatrix()).toEqual(matrix2x2);
  });

  it('should only allow square matrix', () => {
    expect(() => PuzzleNMove.from([[1, 2]])).toThrow('square matrix');
  });

  it('should not allow matrix 1x1', () => {
    expect(() => PuzzleNMove.from([[1]])).toThrow('should be 2x2');
  });

  it('should not allow an empty matrix', () => {
    expect(() => PuzzleNMove.from([[]])).toThrow('square matrix');
  });

  test('matrix should be of unique values', () => {
    expect(() =>
      PuzzleNMove.from([
        [0, 0],
        [0, 0],
      ])
    ).toThrow('repeating values');
    expect(() =>
      PuzzleNMove.from([
        [1, 2, 3],
        [4, 5, 6],
        [7, 7, 0],
      ])
    ).toThrow('repeating values');
  });

  test('matrix should have the pointer element', () => {
    expect(() =>
      PuzzleNMove.from([
        [1, 2],
        [3, 4],
      ])
    ).toThrow('pointer element');
  });
});

it('isEqual() should make comparison by value', () => {
  const move1 = PuzzleNMove.from(matrix2x2);
  const move2 = PuzzleNMove.from(matrix2x2);
  expect(move1).not.toBe(move2);
  expect(move1.isEqual(move2)).toBe(true);
  expect(move2.isEqual(move2)).toBe(true);
});

describe('possibleMoves() pointer in corners', () => {
  const assertStepContainMove = (
    steps: PuzzleNMove[],
    expectedStep: PuzzleNMove
  ) => expect(steps.some(step => step.isEqual(expectedStep))).toBe(true);

  test('top left corner', () => {
    const steps = PuzzleNMove.from([
      [0, 1],
      [2, 3],
    ]).possibleMoves();
    expect(steps).toHaveLength(2);
    assertStepContainMove(
      steps,
      PuzzleNMove.from([
        [1, 0],
        [2, 3],
      ])
    );
    assertStepContainMove(
      steps,
      PuzzleNMove.from([
        [2, 1],
        [0, 3],
      ])
    );
  });

  test('top right corner', () => {
    const steps = PuzzleNMove.from([
      [1, 0],
      [2, 3],
    ]).possibleMoves();
    expect(steps).toHaveLength(2);
    assertStepContainMove(
      steps,
      PuzzleNMove.from([
        [1, 3],
        [2, 0],
      ])
    );
    assertStepContainMove(
      steps,
      PuzzleNMove.from([
        [0, 1],
        [2, 3],
      ])
    );
  });

  test('bottom left corner', () => {
    const steps = PuzzleNMove.from([
      [1, 2],
      [0, 3],
    ]).possibleMoves();
    expect(steps).toHaveLength(2);
    assertStepContainMove(
      steps,
      PuzzleNMove.from([
        [1, 2],
        [3, 0],
      ])
    );
    assertStepContainMove(
      steps,
      PuzzleNMove.from([
        [0, 2],
        [1, 3],
      ])
    );
  });

  test('bottom right corner', () => {
    const steps = PuzzleNMove.from([
      [1, 2],
      [3, 0],
    ]).possibleMoves();
    expect(steps).toHaveLength(2);
    assertStepContainMove(
      steps,
      PuzzleNMove.from([
        [1, 2],
        [0, 3],
      ])
    );
    assertStepContainMove(
      steps,
      PuzzleNMove.from([
        [1, 0],
        [3, 2],
      ])
    );
  });
});

test('accept() receives the current move', () => {
  const solution: PuzzleSolution = { add: jest.fn() };
  const move = PuzzleNMove.from(matrix2x2);
  move.accept(solution);
  expect(solution.add).toHaveBeenCalledWith(move);
});

describe('countMisplaces()', () => {
  test('self-comparison should not count misplaces', () => {
    const move1 = PuzzleNMove.from(matrix2x2);
    expect(move1.countMisplaces(move1)).toBe(0);
  });

  test('count misplaces for different moves', () => {
    const targetMove = PuzzleNMove.from([
      [1, 2],
      [3, 0],
    ]);
    const move = PuzzleNMove.from([
      [1, 2],
      [0, 3],
    ]);
    expect(targetMove.countMisplaces(move)).toBe(2);
  });
});
