import React from 'react';
import TextInput from '../containers/text-input';
import Counter from '../containers/counter';
import Toggle from '../containers/toggle';

export default function App() {
  return (
    <div className="game-area">
      <div className="screen-panel">

      </div>
      <div className="control-panel texture">
        <TextInput/>
        <Counter/>
        <Toggle/>
      </div>
    </div>
  );
}
