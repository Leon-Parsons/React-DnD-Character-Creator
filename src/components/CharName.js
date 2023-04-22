import React, {useState, useContext} from "react";
import { AppContext } from "../App";

const CharName = () => {

  const {formData, setFormData} = useContext(AppContext);

  const firstName = ["Jorr", "Keela", "Jeroy", "Rishka", "Leer", "Kall", "Jenra", "Yan", "Kurk"];
  const lastName = ["Rorrison", "Gorrax", "Karlo", "Torak", "Raddok", "Yorra"];

  const randomiseName = () => {
    const randomNum1 = Math.floor(Math.random() * firstName.length);
    const randomNum2 = Math.floor(Math.random() * lastName.length);
    setFormData({...formData, charName: firstName[randomNum1] + " " + lastName[randomNum2]}); 
    {console.log(formData.charName)};
  }


  return (
    <div className="name">
      <h4>Enter Name</h4>
      <input value={formData.charName} onChange={(event) => 
        setFormData({...formData, charName: event.target.value})
      }
      />
      <button onClick={randomiseName}>Randomise</button>
    </div>
  )
}

export default CharName;