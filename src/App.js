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

  const switchNameHandler = () => {
    // console.log('was clicked');
    setPersonsState({
      persons: [
        { name: 'Jules', age: '33'},
        { name: 'Tina', age: '43'},
        { name: 'Dana', age: '40'}
      ]
    }

    )

  }

   
    return (
      <div className="App">
     <h1>Hi</h1>
     <button onClick={switchNameHandler}>Switch</button>
     <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
     <Person 
     name={personsState.persons[1].name} 
     age={personsState.persons[1].age}
     click={switchNameHandler}>I like racing</Person>
     <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
     
      </div>
    );
    // return React.createElement('div', null, 'h1', 'Hi I\'m a React App!');
  }


export default app;
