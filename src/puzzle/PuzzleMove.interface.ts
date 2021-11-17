import { PuzzleSolution } from './PuzzleSolution.interface';

export interface PuzzleMove {
  isEqual(move: PuzzleMove): boolean;
  possibleMoves(): PuzzleMove[];
  countMisplaces(move: PuzzleMove): Number;
  accept(solution: PuzzleSolution): void;
}
