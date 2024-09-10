import React from 'react';
import { Router } from '@reach/router';

import Header from './layout/Header';
import Footer from './layout/Footer';
import Body from './layout/Body';


function App() {
  return (
    <>
      <Header />
      <Body>
          <Router>
          </Router>
      </Body>
      <Footer />
    </>
  );
}

export default App;