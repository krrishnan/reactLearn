import React from "react";
import Person from "./Person/Person";

const Persons = ( props ) => {
  const Persons = props.Persons;
  const PersonComponents = Persons.map(
    ( person ) => {
      return <Person key = {person.name} personDetail = { person }/>
    }
  ); 
  return PersonComponents;
}

export default Persons;