import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Theme from './styles/Theme';
import Navbar from './components/Navbar';
import Overview from './components/pages/Overview';
import World from './components/pages/World';
import Country from './components/pages/Country';
import Map from './components/pages/Map';

const Container = styled.div`
  display: flex;
`;

const App = () => {
  return (
    <Theme>
      <Router>
        <Container>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Overview} />
            <Route path='/world' exact component={World} />
            <Route path='/country' exact component={Country} />
            <Route path='/map' exact component={Map} />
          </Switch>
        </Container>
      </Router>
    </Theme>
  );
};

export default App;
