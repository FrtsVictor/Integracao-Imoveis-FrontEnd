import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Footer from './components/Footer';

const App = () => (
  <>
    <BrowserRouter>
      <Routes />
      <Footer />
    </BrowserRouter>
  </>
);

export default App;
