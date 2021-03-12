import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Harry', age: '25'},
      { name: 'Jerry', age: '29'},
      { name: 'Jane', age: '28'}
    ]
  }

  switchNameHandler = () => {
    // console.log('was clicked');
    this.setState({
      persons: [
        { name: 'Jules', age: '33'},
        { name: 'Tina', age: '43'},
        { name: 'Dana', age: '40'}
      ]
    }

    )

  }

  render() {
    return (
      <div className="App">
     <h1>Hi</h1>
     <button onClick={this.switchNameHandler}>Switch</button>
     <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
     <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>I like racing</Person>
     <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
     
      </div>
    );
    // return React.createElement('div', null, 'h1', 'Hi I\'m a React App!');
  }
}

export default App;
