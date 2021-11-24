import { useState } from 'react';
import { PuzzleStepImpl } from './puzzle/PuzzleStepImpl';
import { PuzzleSolverImpl } from './puzzle/PuzzleSolverImpl';

import GridItem from './components/GridItem';
import SolutionSection from './components/SolutionSection/SolutionSection';
import { Title } from './components/Title';
import { Header } from './components/Header';
import { Board } from './components/Board';
import { Button } from './components/Button';
import { Layout } from './components/Layout';

import { EXAMPLES, GOAL_STEP } from './App.constants';
import { Actions } from './App.styles';

function App() {
  const [currentTiles, setTiles] = useState(EXAMPLES.sameAsGoal);
  const [solutionStep, setSolutionStep] = useState<PuzzleStepImpl>(null);

  const handleSolve = async () => {
    const solver = new PuzzleSolverImpl();
    const initialStep = new PuzzleStepImpl(currentTiles, null, null);
    if (initialStep.isSolvable()) {
      console.log('Resolviendo');
      const step = solver.solve(initialStep, GOAL_STEP) as PuzzleStepImpl;
      console.log('Listo');
      setSolutionStep(step);
    } else {
      alert('Sin solución');
    }
  };

  return (
    <div className="App">
      <Layout className="App-container">
        <Header>
          <Title>Sliding Puzzle</Title>
        </Header>
        <Actions>
          <Button onClick={() => setTiles(EXAMPLES.easiest)} outline>
            Fácil
          </Button>
          <Button onClick={() => setTiles(EXAMPLES.hard)} outline>
            Difícil
          </Button>
          <Button onClick={() => setTiles(EXAMPLES.hardest)} outline>
            Muy difícil
          </Button>
        </Actions>
        <div>
          <Board>
            {currentTiles.map((value, index) => (
              <GridItem
                key={value}
                value={value}
                onChange={value => {
                  setTiles(t => {
                    const nextTiles = t.slice();
                    nextTiles[index] = value;
                    return nextTiles;
                  });
                }}
              />
            ))}
          </Board>
          <Actions>
            <Button onClick={handleSolve} type="button">
              Resolver
            </Button>
          </Actions>
        </div>
        {solutionStep && <SolutionSection step={solutionStep} />}
      </Layout>
    </div>
  );
}

export default App;
