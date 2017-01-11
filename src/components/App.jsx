import React from 'react';
import Display from '../containers/displayContainer';
import ButtonPad from '../containers/buttonPadContainer';

const App = () => (
  <div className="app container">
    <h1 className="text-center"> Calculator-Redux </h1>
    <Display />
    <ButtonPad />
  </div>
);

export default App;
