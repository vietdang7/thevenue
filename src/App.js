import React, { Component } from 'react';
import './resources/styles.css';

import Header from './components/header_footer/Header'

class App extends Component {
  render() {
    return (
      <div className="App" style={{background: 'cornflowerblue', height:'2500px'}}>
        <Header/>
       
      </div>
    );
  }
}

export default App;
