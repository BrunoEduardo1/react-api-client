import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
// import Series from '../../containers/Series';
import Main from '../Main';
// import whatwg-fecth

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            <Link to={`/`} className="linkHome">
              Busca de Séries
            </Link>
          </p>
        </header>
        <Main />
      </div>
    );
  }
}

export default App;
