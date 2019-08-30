import React from 'react';
import TextInput from '../containers/text-input';
import Counter from '../containers/counter';
import Toggle from '../containers/toggle';
import Buttons from '../containers/buttons';
import Slider from '../containers/slider';

export default function App() {
  return (
    <div className="game-area">
      <div className="screen-panel">

      </div>
      <div className="control-panel texture">
        <TextInput/>
        <Counter name="Counter"/>
        <Toggle name="Toggle"/>
        <Buttons name="Buttons"/>
        <Slider name="Slider"/>
      </div>
    </div>
  );
}
