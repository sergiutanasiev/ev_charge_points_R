import React from 'react';
import { Router } from '@reach/router';

import Header from './layout/Header';
import Footer from './layout/Footer';
import Body from './layout/Body';
import Stations from './pages/Stations';
import { SimulationProvider } from './context/simulationContext';

function App() {
  return (
    <>
      <SimulationProvider>
        <Header />
        <Body>
            <Router>
              <Stations path="/" />
            </Router>
        </Body>
        <Footer />
      </SimulationProvider>
    </>
  );
}

export default App;