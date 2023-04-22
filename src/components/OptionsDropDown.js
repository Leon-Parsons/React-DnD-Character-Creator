import React, {useState, useContext} from "react";
import { AppContext } from "../App";

const OptionsDropDown = (props) => {
  
  //const displayRandBtn = 
  const {formData, setFormData} = useContext(AppContext);

  const randomise = () => {
    const randomNum = Math.floor(Math.random() * props.options.length + 1);
    let randomVal = props.options[randomNum];
    console.log(randomVal);
    setFormData({...formData, race: randomVal});

    return randomVal;
  }

  return (
    <>
    <select value={formData.race} onChange={(event) => 
      setFormData({...formData, race: event.target.value})}>
      {props.options.map((op) => {
      return <option key={op}>{op}</option>})}

    </select>

    <button onClick={randomise}>Randomize</button>
    </>
  )
}

export default OptionsDropDown;
