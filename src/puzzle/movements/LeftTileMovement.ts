import { BaseTileMovement } from './BaseTileMovement';
import { TakenDirection } from './TakenDirection.enum';
import { TileMovement } from './TileMovement.interface';

export class LeftTileMovement extends BaseTileMovement implements TileMovement {
  direction() {
    return TakenDirection.LEFT;
  }

  offset() {
    return -1;
  }

  canMove(tiles: number[]): boolean {
    const pointer = tiles.indexOf(this.blankSpace);
    if (pointer === 0 || pointer === 3 || pointer === 6) {
      return false;
    }
    return true;
  }
}
