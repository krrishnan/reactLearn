import React from 'react';
import TogglePersonClasses from './TogglePerson.module.css';

const TogglePerson = ( props ) => {
  let showHideClass = TogglePersonClasses.ButtonShow
  let buttonLabel = `Show Persons`;
  if(props.showPersons){
    showHideClass = TogglePersonClasses.ButtonHide;
    buttonLabel = `Hide Persons`
  }
  
  return (
    <button 
      className={`${TogglePersonClasses.Button} ${showHideClass}`}
      onClick={props.togglePerson}
    >
      {buttonLabel}
    </button>
  );
}

export default TogglePerson;