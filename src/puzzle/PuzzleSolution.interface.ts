import { PuzzleMove } from './PuzzleMove.interface';

export interface PuzzleSolution {
  add(move: PuzzleMove): void;
}
