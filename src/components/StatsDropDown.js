import React, {useState, useContext} from "react";
import { AppContext } from "../App";

const StatsDropDown = (props) => {

  const {formData, setFormData} = useContext(AppContext);

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


