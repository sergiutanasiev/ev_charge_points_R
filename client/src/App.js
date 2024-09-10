import React from 'react';
import { Router } from '@reach/router';

import Header from './layout/Header';
import Body from './layout/Body';
import Stations from './pages/Stations';
import { SimulationProvider } from './context/simulationContext';

function App() {
  return (
    <div>
      <SimulationProvider>
        <Header />
        <Body>
            <Router>
              <Stations path="/" />
            </Router>
        </Body>
      </SimulationProvider>
    </div>
  );
}

export default App;