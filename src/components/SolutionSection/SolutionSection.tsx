import React from 'react';
import SolutionItem from '../SolutionItem/SolutionItem';
import { ParentStepIterator } from '../../puzzle/ParentStepIterator';
import { PuzzleStepImpl } from '../../puzzle/PuzzleStepImpl';
import { ListContainer } from './SolutionSection.styles';

function SolutionSection({ step }: { step: PuzzleStepImpl }) {
  const items = Array.from(new ParentStepIterator(step)).reverse();
  return (
    <div>
      <ListContainer>
        {items.map(step => (
          <SolutionItem key={step.hash()} step={step as any} />
        ))}
      </ListContainer>
      <p>Total pasos: {items.length}</p>
    </div>
  );
}

export default SolutionSection;
