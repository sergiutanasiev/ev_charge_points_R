import React from 'react';
import { Router } from '@reach/router';

import Header from './layout/Header';
import Footer from './layout/Footer';
import Body from './layout/Body';
import Stations from './pages/Stations';


function App() {
  return (
    <>
      <Header />
      <Body>
          <Router>
            <Stations path="/" />
          </Router>
      </Body>
      <Footer />
    </>
  );
}

export default App;