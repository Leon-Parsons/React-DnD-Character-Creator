import React, {useState, useContext} from "react";
import { CharContext } from "./Context";


const OptionsDropDown = (props) => {
  
  const {formData, setFormData} = useContext(CharContext);


  const handleChange = (event) => {
    console.log(props.formVal);
  };

  const randomise =() => {
    let randomNum = Math.floor(Math.random() * props.options.length + 1);
    let randomVal = props.options[randomNum];
    console.log(props.formVal);
  }

  return (
    <>
    <h1>{props.formVal}</h1>
    <select value={props.formVal} onChange={handleChange}>
      {props.options.map((op) => {
      return <option key={op}>{op}</option>})}
    </select>
    

    <button onClick={randomise}>Randomize</button>
    </>
  )
}

export default OptionsDropDown;
