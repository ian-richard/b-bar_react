import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Harry', age: '25'},
      { name: 'Jerry', age: '29'},
      { name: 'Jane', age: '28'}
    ]
  });

  console.log(personsState);

  const switchNameHandler = (onName) => {
    // console.log('was clicked');
    setPersonsState({
      persons: [
        { name: onName, age: '33'},
        { name: 'Tina', age: '43'},
        { name: 'Dana', age: '40'}
      ]
    })
  }

  const nameChangedHandler = (event) => {
    setPersonsState( {
      persons: [
        { name: event.target.value, age: '33'},
        { name: 'Tina', age: '43'},
        { name: 'Dana', age: '40'}
      ]})
  }

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

    return (
      <div className="App">
     <h1>Hi</h1>
     <button 
     style={style}
     onClick={()=>switchNameHandler('Liz Arden')}>Switch</button>
     <Person 
     name={personsState.persons[0].name} 
     age={personsState.persons[0].age}
     changed={nameChangedHandler}/>
     <Person 
     name={personsState.persons[1].name} 
     age={personsState.persons[1].age}
     click={switchNameHandler.bind(this, 'K.Starmer')}>I like racing</Person>
     <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
     
      </div>
    );
    // return React.createElement('div', null, 'h1', 'Hi I\'m a React App!');
  }


export default app;
