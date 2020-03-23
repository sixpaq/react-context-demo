import React from 'react';
import { StatusBar } from './Components/StatusBar';
import { Button } from './Components/Button';
import { DemoContextProvider } from './Context/DemoContext';

import './App.scss';

function App() {
  return (
    <DemoContextProvider>
      <div className="app">
        <div className="page-content">
          <div className="button-bar">
            <Button name='You have chosen: Elephant' label='Choose Elephant' />
            <Button name='You have chosen: Lion' label='Choose Lion' />
            <Button name='You have chosen: Rhino' label='Choose Rhino' />
            <Button name='You have chosen: Giraf' label='Choose Giraf' />
            <Button name='You have chosen: Leopard' label='Choose Leopard' />
          </div>
        </div>
        <StatusBar />
      </div>
    </DemoContextProvider>
  );
}

export default App;
