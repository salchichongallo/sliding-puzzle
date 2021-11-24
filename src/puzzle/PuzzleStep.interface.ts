export interface PuzzleStep {
  heuristic(goal: PuzzleStep): number;
  possibleMoves(): PuzzleStep[];
  isEqual(step: PuzzleStep): boolean;
  hash(): string;
  getParent(): PuzzleStep | null;
}
