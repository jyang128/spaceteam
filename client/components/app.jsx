import React from 'react';
import Counter from '../containers/counter';

export default function App() {
  return (
    <div className="game-area">
      <div className="screen-panel">

      </div>
      <div className="control-panel texture">
        <Counter/>
      </div>
    </div>
  );
}
