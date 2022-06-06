import React from "react";
import "./Input.scss";

const Input = ({
  labelText,
  inputType,
  onChangeEvent,
  inputName,
  value,
}) => {

  return (
    <>
      <div className="input-container">
        <label htmlFor={inputName} className="input-container__label">
          {labelText}
        </label>
        <input
          type={inputType}
          name={inputName}
          className="input-container__input"
          value={value}
          onChange={onChangeEvent}
        />
      </div>
    </>
  );
};

export default Input;
