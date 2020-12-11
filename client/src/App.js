import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import { Provider } from 'react-redux';
import store from './store';
import { Container } from 'semantic-ui-react';

import ProjectList from './components/ProjectList';
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <Container>
          <Header />
          <ProjectList />
        
      </Container>
    </Provider>
  );
}

export default App;
