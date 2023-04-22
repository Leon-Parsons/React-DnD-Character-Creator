import React, {useState, useContext} from "react";
import OptionsDropDown from "./OptionsDropDown";
import { AppContext } from "../App";

const CharOptions = () => {
    const {formData, setFormData} = useContext(AppContext);

    const races = ["Dragonborn", "Dwarf", "Elf", "Gnome", "Halfling"];
    const classes = ["Barbarian", "Bard", "Cleric", "Druid"]
    const alignments =  ["Lawful-Good", "Lawful-Neutral", "Lawful-Evil",
                "Neutral-Good", "True-Neutral", "Neutral-Evil",
                "Chaotic-Good", "Chaotic-Neutral", "Chaotic-Evil"];
    const background = ["Acolyte", "Charlatan", "Criminal", "Entertainer", "Folk Hero"];

  return (
    <>
      <OptionsDropDown options={races}  setFormData={setFormData} formData={formData} val={"race"}/>
      <OptionsDropDown options={classes} setFormData={setFormData} formData={formData}/>
      <OptionsDropDown options={alignments} setFormData={setFormData} formData={formData}/>
      <OptionsDropDown options={background} setFormData={setFormData} formData={formData}/>
    </>
  )
}

export default CharOptions;