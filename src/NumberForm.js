import React from "react";

function NumberForm({ number, changeNumberHandler}) {

  return (
    <form>
      <label htmlFor="question">How many pokemon would you like?</label>
      <input
        id="number"
        type="number"
        name="number"
        onChange={changeNumberHandler}
        value={number}
      ></input>
    </form>
  );
}

export default NumberForm;
