import { PuzzleStepImpl } from './puzzle/PuzzleStepImpl';

export const GOAL_STEP = new PuzzleStepImpl(
  [1, 2, 3, 4, 5, 6, 7, 8, 0],
  null,
  null
);

export const EXAMPLES = {
  sameAsGoal: GOAL_STEP['tiles'].slice(),
  easiest: [1, 2, 3, 4, 5, 6, 7, 0, 8],
  hard: [8, 7, 6, 0, 4, 1, 2, 5, 3],
  hardest: [0, 8, 7, 6, 5, 4, 3, 2, 1],
};
