import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
     <h1>Hi</h1>
     <Person name='Harry' age='25'/>
     <Person name='Jerry' age='29'/>
     <Person name='Jane' age='28'/>
      </div>
    );
    // return React.createElement('div', null, 'h1', 'Hi I\'m a React App!');
  }
}

export default App;
