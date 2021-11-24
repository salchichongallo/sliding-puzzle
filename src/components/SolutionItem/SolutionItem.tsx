import React from 'react';
import { GOAL_STEP } from '../../App.constants';
import { PuzzleStepImpl } from '../../puzzle/PuzzleStepImpl';
import { getDirectionLabel } from './getDirectionLabel';
import { Card, Pre } from './SolutionItem.styles';

function SolutionItem({ step }: { step: PuzzleStepImpl }) {
  const { g, h, f, direction } = step.getInfo(GOAL_STEP);
  return (
    <Card>
      {direction && <span>Paso: {getDirectionLabel(direction)}</span>}
      <Pre>
        <code>{listToMatrixString(step['tiles'])}</code>
      </Pre>
      <small>
        g={g}, h={h}, <b>f={f}</b>
      </small>
    </Card>
  );
}

function listToMatrixString(list: unknown[]) {
  const size = Math.sqrt(list.length);
  let string = '';
  for (let index = 0; index < list.length; index++) {
    if (index % size <= 1) {
      string += list[index] + ' ';
    } else if (index % size === 2) {
      string += list[index] + '\n';
    }
  }
  return string;
}

export default SolutionItem;
