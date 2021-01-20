import React from "react";

const Input = props => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      name={props.name}
      onChange={props.onChange}
      maxLength={props.maxLength}
      className={props.className}
    />
  );
};

export default Input;
