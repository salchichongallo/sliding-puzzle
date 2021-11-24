import { TakenDirection } from './TakenDirection.enum';

export interface TileMovement {
  move(tile: number[]): [number[], TakenDirection];
  canMove(tile: number[]): boolean;
}
