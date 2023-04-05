import React from "react";
import StatsDropDown from "./StatsDropDown";


const statTemplateVals = [15,14,13,12,10,8];


const CharStats = () => {
  return (
    <div className = "stats">
      <StatsDropDown options = {statTemplateVals} startVal = {15}/>
      <StatsDropDown options = {statTemplateVals} startVal = {14}/>
      <StatsDropDown options = {statTemplateVals} startVal = {13}/>
      <StatsDropDown options = {statTemplateVals} startVal = {12}/>
      <StatsDropDown options = {statTemplateVals} startVal = {10}/>
      <StatsDropDown options = {statTemplateVals} startVal = {8}/>

      <button>Randomize</button>
    </div>
  )
}

export default CharStats;