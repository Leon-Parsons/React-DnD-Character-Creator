import React, {useState, useContext} from "react";
import OptionsDropDown from "./OptionsDropDown";
import { CharContext } from "./Context";

const CharOptions = () => {
    const {formData, setFormData} = useContext(CharContext);

    const races = ["Dragonborn", "Dwarf", "Elf", "Gnome", "Halfling"];
    const classes = ["Barbarian", "Bard", "Cleric", "Druid"]
    const alignments =  ["Lawful-Good", "Lawful-Neutral", "Lawful-Evil",
                "Neutral-Good", "True-Neutral", "Neutral-Evil",
                "Chaotic-Good", "Chaotic-Neutral", "Chaotic-Evil"];
    const background = ["Acolyte", "Charlatan", "Criminal", "Entertainer", "Folk Hero"];

  return (
    <>
      <OptionsDropDown options={races} formVal={"race"}/> 
      {/* <OptionsDropDown options={classes} formVal={formData.class}/>
      <OptionsDropDown options={alignments} formVal={formData.alignment}/>
      <OptionsDropDown options={background} formVal={formData.background}/> */}
    </>
  )
}

export default CharOptions;