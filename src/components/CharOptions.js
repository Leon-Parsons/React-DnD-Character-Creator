import React, {useState} from "react";
import DropDown from "./DropDown";

const CharOptions = () => {


    const races = ["Dragonborn", "Dwarf", "Elf", "Gnome", "Halfling"];
    const classes = ["Barbarian", "Bard", "Cleric", "Druid"]
    const alignments =  ["Lawful-Good", "Lawful-Neutral", "Lawful-Evil",
                "Neutral-Good", "True-Neutral", "Neutral-Evil",
                "Chaotic-Good", "Chaotic-Neutral", "Chaotic-Evil"];
    const background = ["Acolyte", "Charlatan", "Criminal", "Entertainer", "Folk Hero"];

  return (
    <>
      <DropDown options={races}/>
      <DropDown options={classes}/>
      <DropDown options={alignments}/>
      <DropDown options={background}/>
    </>
  )
}

export default CharOptions;