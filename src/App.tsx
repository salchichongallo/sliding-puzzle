import { useState } from 'react';
import { PuzzleNMove } from './puzzle/PuzzleNMove';
import { PuzzleNSolver } from './puzzle/PuzzleNSolver';
import { StringPuzzleSolution } from './puzzle/StringPuzzleSolution';
import GridItem from './components/GridItem';
import './App.css';

function App() {
  const [string, setString] = useState('');
  const handleSolve = () => {
    const solution = new StringPuzzleSolution();
    const solver = new PuzzleNSolver(solution);
    const initialMove = PuzzleNMove.from([
      [0, 2, 3],
      [1, 4, 6],
      [7, 5, 8],
      // [1, 2, 3],
      // [0, 4, 6],
      // [7, 5, 8],
      // [0, 1],
      // [2, 3],
    ]);
    const goalMove = PuzzleNMove.from([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 0],
      // [1, 3],
      // [2, 0],
    ]);
    solution.add(initialMove);
    console.log('solving');
    solver.solve(initialMove, goalMove);
    console.log('done');
    setString(solution.toString());
  };
  return (
    <div className="App">
      <header>
        <h1 style={{ margin: 0, padding: 20 }}>App</h1>
        <button onClick={handleSolve} type="button">
          Solve
        </button>
        <button onClick={() => setString('')} type="button">
          Reset
        </button>
        <hr />
      </header>

      <main className="container">
        <div>
          <GridItem>1</GridItem>
          <GridItem>2</GridItem>
          <GridItem>3</GridItem>
        </div>
        <div>
          <GridItem>4</GridItem>
          <GridItem>5</GridItem>
          <GridItem>6</GridItem>
        </div>
        <div>
          <GridItem>7</GridItem>
          <GridItem>8</GridItem>
          <GridItem drag>0</GridItem>
        </div>
      </main>

      <pre>
        <code>{string}</code>
      </pre>
    </div>
  );
}

export default App;
