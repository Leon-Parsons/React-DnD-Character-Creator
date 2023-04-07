import React, {useState} from "react";

const StatsDropDown = (props) => {
  
  const [chosenVal, setChosenVal] = useState(props.startVal);

  const handleChange = (event) => {
    setChosenVal(event.target.value);
  }

  return (
    <>
    <select value={chosenVal} onChange={handleChange}>
      {props.options.map((op) => {
      return <option key={op}>{op}</option>})}
    </select>
    </>
  )
}

export default StatsDropDown;
