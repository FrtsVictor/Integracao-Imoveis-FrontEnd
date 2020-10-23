import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Footer from './components/Footer';
import GlobalStyle from './styles/global';

const App = () => (
  <>
    <BrowserRouter>
      <Routes />
      <Footer />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
