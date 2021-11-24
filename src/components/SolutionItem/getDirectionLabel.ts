import { TakenDirection } from '../../puzzle/movements/TakenDirection.enum';

export function getDirectionLabel(direction: TakenDirection) {
  switch (direction) {
    case TakenDirection.UP:
      return 'Arriba';
    case TakenDirection.DOWN:
      return 'Abajo';
    case TakenDirection.LEFT:
      return 'Izquierda';
    case TakenDirection.RIGHT:
      return 'Derecha';
  }
}
