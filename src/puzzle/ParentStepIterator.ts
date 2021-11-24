import { PuzzleStep } from './PuzzleStep.interface';

export class ParentStepIterator implements Iterable<PuzzleStep> {
  constructor(private readonly step: PuzzleStep) {}

  *[Symbol.iterator](): Iterator<PuzzleStep, any, undefined> {
    let node = this.step;
    while (node) {
      yield node;
      node = node.getParent();
    }
  }
}
