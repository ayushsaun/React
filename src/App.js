import React, { Component } from 'react';
import Main from './component/MainComponent';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore } from './redux/configureStore'

// so now the store becomes available to us
const store = configureStore();

class App extends Component {

  render(){
    return (
      // with this we are accessing the store we made in configureStore function 
      <Provider store = {store}>
        <BrowserRouter>
          <div>
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
