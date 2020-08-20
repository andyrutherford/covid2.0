import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Container from './components/UI/Container';

import { default as GlobalStyle } from './styles/GlobalStyle';

import Theme from './styles/Theme';
import Navbar from './components/Navbar';
import Overview from './components/pages/Overview';
import World from './components/pages/World';
import CountriesPage from './components/pages/CountriesPage';
import CountryPage from './components/pages/CountryPage';
import MapPage from './components/pages/MapPage';

import './App.css';

const Wrapper = styled.div`
  display: flex;
`;

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const themeHandler = () => {
    setDarkMode(!darkMode);
    console.log(darkMode);
  };

  return (
    <Theme darkMode={darkMode}>
      <Router>
        <GlobalStyle />
        <Wrapper>
          <Navbar themeHandler={themeHandler} />
          <Container color='black' bg='#e9edf6' width={'100%'}>
            <Switch>
              <Route path='/' exact component={Overview} />
              <Route path='/world' exact component={World} />
              <Route path='/country' exact component={CountriesPage} />
              <Route path='/country/:country' exact component={CountryPage} />
              <Route path='/map' exact component={MapPage} />
            </Switch>
          </Container>
        </Wrapper>
      </Router>
    </Theme>
  );
};

export default App;
