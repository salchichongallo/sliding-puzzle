import { TakenDirection } from './TakenDirection.enum';
import { TileMovement } from './TileMovement.interface';

export abstract class BaseTileMovement implements TileMovement {
  public move(tiles: number[]): [number[], TakenDirection] {
    const copy = Array.from(tiles);
    const pointer = tiles.indexOf(this.blankSpace);
    const value = tiles[pointer + this.offset()];
    copy[pointer + this.offset()] = this.blankSpace;
    copy[pointer] = value;
    return [copy, this.direction()];
  }

  abstract offset(): number;
  abstract direction(): TakenDirection;
  abstract canMove(tile: number[]): boolean;

  protected get blankSpace(): number {
    return 0;
  }
}
