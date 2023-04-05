import React from "react";

const DropDown = (props) => {
  
  //const displayRandBtn = 

  console.log(
    props.options.map((option) => {
      return option.toUpperCase()
    })
  );

  return (
    <>
    <select>
      {props.options.map((op) => {
      return <option key={op}>{op}</option>})}
    </select>

    <button>Randomize</button>
    </>
  )
}

export default DropDown;
