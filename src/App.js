import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store/index';
import Landing from './components/Landing/Landing';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Landing />
        </Provider>
      </div>
    );
  }
}

export default App;
