import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Container from './components/UI/Container';

import { default as GlobalStyle } from './styles/GlobalStyle';

import Theme from './styles/Theme';
import Navbar from './components/Navbar';
import Overview from './components/pages/Overview';
import World from './components/pages/World';
import Country from './components/pages/Country';
import MapPage from './components/pages/MapPage';

const Wrapper = styled.div`
  display: flex;
`;

const App = () => {
  return (
    <Theme>
      <Router>
        <GlobalStyle />
        <Wrapper>
          <Navbar />
          <Container color='black' bg='lightgrey' width={1}>
            <Switch>
              <Route path='/' exact component={Overview} />
              <Route path='/world' exact component={World} />
              <Route path='/country' exact component={Country} />
              <Route path='/map' exact component={MapPage} />
            </Switch>
          </Container>
        </Wrapper>
      </Router>
    </Theme>
  );
};

export default App;
