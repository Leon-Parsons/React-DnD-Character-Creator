import React, {useState} from "react";
import OptionsDropDown from "./OptionsDropDown";

const CharOptions = () => {

    const races = ["Dragonborn", "Dwarf", "Elf", "Gnome", "Halfling"];
    const classes = ["Barbarian", "Bard", "Cleric", "Druid"]
    const alignments =  ["Lawful-Good", "Lawful-Neutral", "Lawful-Evil",
                "Neutral-Good", "True-Neutral", "Neutral-Evil",
                "Chaotic-Good", "Chaotic-Neutral", "Chaotic-Evil"];
    const background = ["Acolyte", "Charlatan", "Criminal", "Entertainer", "Folk Hero"];

  return (
    <>
      <OptionsDropDown options={races}/>
      <OptionsDropDown options={classes}/>
      <OptionsDropDown options={alignments}/>
      <OptionsDropDown options={background}/>
    </>
  )
}

export default CharOptions;