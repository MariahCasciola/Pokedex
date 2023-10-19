import "./styling/App.css";
import Pokedex from "./Pokedex";
import Headline from "./Headline";
import NumberForm from "./NumberForm";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(1);

  //handle number change
  const changeNumberHandler = (event) => {
    setNumber(event.target.value);
  };

  // submit the
    const submitHandler = (event) => {
      event.preventDefault();
      setNumber(number)
    };

  return (
    <div>
      <Headline />
      <NumberForm number={number} changeNumberHandler={changeNumberHandler} submitHandler={submitHandler} />
      <Pokedex number={number}/>
    </div>
  );
}

export default App;
