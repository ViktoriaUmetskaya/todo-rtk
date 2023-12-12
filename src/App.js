import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Content from './Content/Content';
import store from './Redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <header className="App-header">
          <Router>
            <Content />
          </Router>
        </header>
      </Provider>
    </div>
  );
}

export default App;
