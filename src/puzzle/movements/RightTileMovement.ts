import { BaseTileMovement } from './BaseTileMovement';
import { TakenDirection } from './TakenDirection.enum';
import { TileMovement } from './TileMovement.interface';

export class RightTileMovement
  extends BaseTileMovement
  implements TileMovement
{
  direction() {
    return TakenDirection.RIGHT;
  }

  offset() {
    return +1;
  }

  canMove(tiles: number[]): boolean {
    const pointer = tiles.indexOf(this.blankSpace);
    if (pointer === 2 || pointer === 5 || pointer === 8) {
      return false;
    }
    return true;
  }
}
