import React, {useState, useContext} from "react";
import { CharContext } from "./Context";

const StatsDropDown = (props) => {

  const {formData, setFormData} = useContext(CharContext);

  const handleChange = (event) => {
  };

  return (
    <>
    <select value={props.startVal} onChange={handleChange}>
      {props.options.map((op) => {
      return <option key={op}>{op}</option>})}
    </select>
    </>
  );
}

export default StatsDropDown;


