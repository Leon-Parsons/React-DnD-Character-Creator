import React, {useState, createContext, useContext} from "react";
import Form from "./components/Form";
import {CharContext} from "./components/Context";

const App = () => {

  const [formData, setFormData] = useState({
    charName: "Jimmy Bob",
    race: "Cat",
    class: "Archer",
    alignment: "evil evil",
    background: "meme",
    str: 0,
    dex: 0,
    con: 0,
    int: 0,
    wis: 0,
    char: 0,
});

  return (
    <>
    <CharContext.Provider value={{formData, setFormData}}>
      <Form /> 
    </CharContext.Provider>
    </>
  );
};

export default App;
