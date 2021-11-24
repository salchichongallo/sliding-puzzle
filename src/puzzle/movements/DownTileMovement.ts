import { BaseTileMovement } from './BaseTileMovement';
import { TakenDirection } from './TakenDirection.enum';
import { TileMovement } from './TileMovement.interface';

export class DownTileMovement extends BaseTileMovement implements TileMovement {
  direction() {
    return TakenDirection.DOWN;
  }

  offset() {
    return +3;
  }

  canMove(tiles: number[]): boolean {
    const pointer = tiles.indexOf(this.blankSpace);
    return pointer < 6;
  }
}
