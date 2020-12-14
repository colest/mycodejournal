import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import { Provider } from 'react-redux';
import store from './store';
import { Container } from 'semantic-ui-react';

import ProjectList from './components/ProjectList';
import Header from './components/Header';
import ProjectDetail from './components/ProjectDetail';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Container>
            <Header />
            <Switch>
              <Route path='/' exact component={ProjectList} />
              <Route path='/project/:id' component={ProjectDetail} />  
            </Switch>
            
        </Container>
      </Provider>
    </Router>

  );
}

export default App;
