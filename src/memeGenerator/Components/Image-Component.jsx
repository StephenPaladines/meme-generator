import React from "react";

const ImageComponent = props => {
  return (
    <div className="container">
      <div className="image">
        <img src={props.imageSrc} alt="" />
        <span id="upperText-label">{props.upperText}</span>
        <span id="lowerText-label">{props.lowerText}</span>
      </div>
      <div className="inputs">
        <input
          type="text"
          placeholder={"Top Text"}
          value={props.upperText}
          name={"upperText"}
          onChange={props.handleChange}
          maxLength="15"
          className="text-input"
          size="100%"
        />
        <input
          type="text"
          placeholder={"Lower Text"}
          value={props.lowerText}
          name={"lowerText"}
          onChange={props.handleChange}
          maxLength="15"
          className="text-input"
          size="100%"
        />
      </div>
      <button onClick={props.generateImage} className="page-button">
        Generate
      </button>
    </div>
  );
};

export default ImageComponent;
