import React, {useState} from "react";

const CharName = ({formData, setFormData}) => {

  const firstName = ["Jorr", "Keela", "Jeroy", "Rishka", "Leer", "Kall", "Jenra", "Yan", "Kurk"];
  const lastName = ["Rorrison", "Gorrax", "Karlo", "Torak", "Raddok", "Yorra"];

  const randomiseName = () => {
    const randomNum1 = Math.floor(Math.random() * firstName.length);
    const randomNum2 = Math.floor(Math.random() * lastName.length);
    setFormData(firstName[randomNum1] + " " + lastName[randomNum2]); 
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