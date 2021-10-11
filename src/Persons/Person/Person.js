import React from "react";
import PersonClasses from './Person.module.css';

const Person = ( props ) => {
  const person = props.personDetail;
  return (
    <div className={PersonClasses.Person}>
      <p>Name : {person.name} - {person.age}</p>
      <input type='text' />
    </div>
  );
}

export default Person;