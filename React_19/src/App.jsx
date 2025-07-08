// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import "./App.css";

import User from "./User.jsx";
import { Profile, NewProfile } from "./User.jsx";
// import { NewProfile } from './User.jsx';
import State from "./State.jsx";
import Toggle from "./Toggle.jsx";
import Props from "./Props.jsx";
import PropsLoop from "./PropsLoop.jsx";
import InputChange from "./InputChange.jsx";
import ControlledComponent from "./ControlledComponenet.jsx";
import Checkbox from "./Checkbox.jsx";
import CheckboxChatgpt from "./CheckboxChatgpt.jsx";
import { Radio } from "./Radio.jsx";
import { LoopJSX } from "./LoopJSX.jsx";
import ClockColor from "./ClockColor.jsx";
import NestedLoop from "./NestedLoop.jsx";
import UseEffect from "./Components/UseEffect.jsx";
import Cards from "./Components/Cards.jsx";
import ModuleCSS from "./ModuleCSS/ModuleCSS.jsx";
import StyleComponent from "./Components/StyleComponent.jsx";
import InputRef from "./Components/InputRef.jsx";
import UncontrolledComponent from "./Components/UncontrolledComponent.jsx";
import ForwardRefParent from "./Components/ForwardRefParent.jsx";
import UseFormStatus from "./Components/UseaFormStatus.jsx";
import UseTransition from "./Components/UseTransition.jsx";
import UseTransitionGpt from "./Components/UseTransitionGpt.jsx";
import LiftingStateUp from "./Components/LiftingStateUp.jsx";
import UpdatingArrayState from "./Components/UpdatingArrayState.jsx";
import UseAction from "./Components/UseAction.jsx";
import UseId from "./Components/UseId.jsx";

function App() {
  // let name = 'Amir Salam';
  // let age = 35;
  // let objData={
  //   name:'Sahil',
  //   email:'sahil@780',
  //   mob:8406,

  // }
  return (
    <>
      <h2>This is my first react 19 </h2>
      {/* <UseId /> */}
      {/* <UseAction /> */}
      {/* <UpdatingArrayState /> */}
      {/* <LiftingStateUp /> */}
      {/* <UseTransition /> */}
      {/* <UseTransitionGpt /> */}
      {/* <UseFormStatus /> */}
      {/* <ForwardRefParent /> */}
      {/* <UncontrolledComponent /> */}
      {/* <InputRef /> */}
      {/* <StyleComponent /> */}
      {/* <ModuleCSS /> */}
      {/* <div id="div-image"></div> */}

      {/* <Cards /> */}
      {/* <UseEffect /> */}
      {/* <NestedLoop /> */}
      {/* <ClockColor /> */}
      {/* <LoopJSX /> */}
      {/* <Radio /> */}
      {/* <CheckboxChatgpt /> */}
      {/* <Checkbox /> */}

      {/* <ControlledComponent /> */}
      {/* <InputChange>
        <h2>This is Children </h2>
      </InputChange> */}
      {/* <Props naam={name} age={age} objectValue={objData} /> */}
      {/* <Toggle /> */}

      {/* <State /> */}
      {/* <User />
      <Profile />
      <Button /> */}
    </>
  );
}

// function Button() {

// function alertFunction(){
//     alert('i am another alert 2');
//   }
//   let name='Imaad'
//   let obj={
//     name:'amir',
//     age:27,
//     address:'guwahati'
//   }
//   let arr=[1,3,4,5]
//   return (

//     <>

//       <h1>Button Function </h1>
//       <button onClick={()=>alert('this is Sahil')}>Click me </button>
//       <NewProfile />
//       user name is : {name?'Sahil@780':'unknown user'}
//       <br />
//       2+2 ={2 + 2}
//       <button onClick={alertFunction}>Click </button>
//       <hr/>
//       my brother name is {obj.name}, age is {obj.age}, address {obj.address} &nbsp;
// </>

// )}

export default App;
