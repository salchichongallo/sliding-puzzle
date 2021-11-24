import { DownTileMovement } from './movements/DownTileMovement';
import { LeftTileMovement } from './movements/LeftTileMovement';
import { RightTileMovement } from './movements/RightTileMovement';
import { TakenDirection } from './movements/TakenDirection.enum';
import { UpTileMovement } from './movements/UpTileMovement';
import { PuzzleStep } from './PuzzleStep.interface';

export class PuzzleStepImpl implements PuzzleStep {
  private readonly tiles: number[];
  public readonly parent?: PuzzleStepImpl;
  private readonly direction?: TakenDirection;
  private readonly takenSteps: number;

  constructor(
    tiles: number[],
    parent?: PuzzleStepImpl,
    direction?: TakenDirection
  ) {
    this.tiles = tiles;
    this.parent = parent;
    this.direction = direction;
    if (parent) {
      this.takenSteps = parent.takenSteps + 1;
    } else {
      this.takenSteps = 0;
    }
  }

  heuristic(goal: PuzzleStepImpl): number {
    return this.takenSteps + this.countMisplaces(goal);
  }

  private countMisplaces(goal: PuzzleStepImpl): number {
    let misplaces = 0;
    for (let index = 0; index < this.tiles.length; index++) {
      if (this.tiles[index] !== goal.tiles[index]) {
        misplaces += 1;
      }
    }
    return misplaces;
  }

  possibleMoves(): PuzzleStep[] {
    const moves = [
      new UpTileMovement(),
      new DownTileMovement(),
      new RightTileMovement(),
      new LeftTileMovement(),
    ];
    return moves
      .filter(movement => movement.canMove(this.tiles))
      .map(validMovement => {
        const [tiles, direction] = validMovement.move(this.tiles);
        return new PuzzleStepImpl(tiles, this, direction);
      });
  }

  public isSolvable(): boolean {
    let inversions = 0;
    const list = [...Array.from(new Array(8).keys())];
    for (const i of list) {
      for (let j of list.slice(i, 8)) {
        j += 1;
        if (this.tiles[j] && this.tiles[i] && this.tiles[i] > this.tiles[j]) {
          inversions += 1;
        }
      }
    }
    return inversions % 2 === 0;
  }

  hash(): string {
    return this.tiles.join('');
  }

  isEqual(other: PuzzleStepImpl): boolean {
    return this.hash() === other.hash();
  }

  getParent() {
    return this.parent;
  }

  getInfo(goalState: PuzzleStepImpl) {
    return {
      g: this.takenSteps,
      h: this.countMisplaces(goalState),
      direction: this.direction,
      f: this.heuristic(goalState),
    };
  }
}
