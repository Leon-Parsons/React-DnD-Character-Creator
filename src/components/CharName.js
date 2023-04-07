import React, {useState} from "react";

const CharName = () => {

  const [chosenName, setChosenName] = useState("");

  const firstName = ["Jorr", "Keela", "Jeroy", "Rishka", "Leer", "Kall", "Jenra", "Yan", "Kurk"];
  const lastName = ["Rorrison", "Gorrax", "Karlo", "Torak", "Raddok", "Yorra"];

  const randomiseName = () => {
    const randomNum1 = Math.floor(Math.random() * firstName.length);
    const randomNum2 = Math.floor(Math.random() * lastName.length);
    setChosenName(firstName[randomNum1] + " " + lastName[randomNum2]); 
    setChosen
  }


  return (
    <div className="name">
      <h4>Enter Name</h4>
      <input value={chosenName}></input>
      <button onClick={randomiseName}>Randomise</button>
    </div>
  )
}

export default CharName;