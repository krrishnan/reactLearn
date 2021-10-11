import './App.css';
import React, { Component } from 'react';
import Persons from './Persons/Persons';
import TogglePerson from './Header/TogglePerson';

class App extends Component{
  state = {
    Persons: [
      {name: 'Gopi', age: 24},
      {name: 'Prem', age: 22},
      {name: 'Manoj', age: 20}
    ],
    showPersons : false
  };

  togglePerson = () => {
    this.setState({ showPersons : !this.state.showPersons });
  }

  render(){
    return (
      <div className="App">
        <TogglePerson 
          showPersons={this.state.showPersons}
          togglePerson = {this.togglePerson}
        />
        {
          this.state.showPersons ? 
          <Persons 
            Persons = {this.state.Persons}
          /> : null
        }
        
      </div>
    );
  }
}

export default App;
