import React, {useState} from "react";

const DropDown = (props) => {
  
  //const displayRandBtn = 

  const [chosenVal, setChosenVal] = useState("Meme");

  const handleChange = (event) => {
    setChosenVal(event.target.value);
  }

  const randomise = () => {
    const randomNum = Math.floor(Math.random() * props.options.length + 1);
    setChosenVal(props.options[randomNum]);
    console.log(randomNum);
  }

  return (
    <>
    <select value={chosenVal} onChange={handleChange}>
      {props.options.map((op) => {
      return <option key={op}>{op}</option>})}
    </select>

    <button onClick={randomise}>Randomize</button>
    </>
  )
}

export default DropDown;
