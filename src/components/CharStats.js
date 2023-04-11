import React from "react";
import StatsDropDown from "./StatsDropDown";


const CharStats = () => {

  const statTemplateVals = [15,14,13,12,10,8];

  return (
    <div className = "stats">
        <StatsDropDown options = {statTemplateVals} startVal = {15}/>
        <StatsDropDown options = {statTemplateVals} startVal = {14}/>
        <StatsDropDown options = {statTemplateVals} startVal = {13}/>
        <StatsDropDown options = {statTemplateVals} startVal = {12}/>
        <StatsDropDown options = {statTemplateVals} startVal = {10}/>
        <StatsDropDown options = {statTemplateVals} startVal = {8}/>
    </div>
  )
}

export default CharStats;