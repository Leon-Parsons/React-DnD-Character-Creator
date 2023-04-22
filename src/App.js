import React, {useState, createContext, useContext} from "react";
import Form from "./components/Form";

export const AppContext = createContext(null);

export const App = () => {
  
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
    <AppContext.Provider value={{formData, setFormData}}>
      <Form /> 
    </AppContext.Provider>
    </>
  );
};

export default App;
