import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Container from './components/UI/Container';

import { default as GlobalStyle } from './styles/GlobalStyle';

import Theme from './styles/Theme';
import Navbar from './components/Navbar';
import Overview from './components/pages/Overview';
import WorldPage from './components/pages/WorldPage';
import CountriesPage from './components/pages/CountriesPage';
import CountryPage from './components/pages/CountryPage';
import MapPage from './components/pages/MapPage';

import './App.css';

const App = () => {
  const stored = localStorage.getItem('isDarkMode');
  const [isDarkMode, setIsDarkMode] = useState(
    stored === 'true' ? true : false
  );

  const themeHandler = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('isDarkMode', !isDarkMode);
  };

  return (
    <Theme darkMode={isDarkMode}>
      <Router>
        <GlobalStyle />
        <Navbar themeHandler={themeHandler} isDarkMode={isDarkMode} />
        <Container>
          <Switch>
            <Route path='/' exact component={Overview} />
            <Route path='/world' exact component={WorldPage} />
            <Route path='/country' exact component={CountriesPage} />
            <Route path='/country/:country' exact component={CountryPage} />
            <Route path='/map' exact component={MapPage} />
          </Switch>
        </Container>
      </Router>
    </Theme>
  );
};

export default App;
