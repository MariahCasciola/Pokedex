import React from "react";
import "./styling/Form.css";
import "./styling/global.css";

function NumberForm({ number, changeNumberHandler, submitHandler }) {
  return (
    <>
      <form className="display-center">
        <div className="label-input">
          <label id="question" htmlFor="number" className="text-color">
            How many pokemon would you like to list?
          </label>
          <input
            className=""
            id="number"
            type="text"
            name="number"
            onChange={changeNumberHandler}
            value={number}
          ></input>
        </div>
      </form>
      <button className="button" onClick={submitHandler}>
        Submit
      </button>
    </>
  );
}

export default NumberForm;
