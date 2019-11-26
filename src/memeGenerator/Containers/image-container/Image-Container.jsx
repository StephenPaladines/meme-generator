import React, { useState } from "react";
import "./Image-Container.css";
import Input from "../../Components/input/Input";
import Button from "../../Components/button/Button";

const ImageContainer = () => {
  const [{ upperText, lowerText }, setInputText] = useState({
    // Destruct object w/ properties upperText and lowerText
    // Can also be two seperate variables
    upperText: "",
    lowerText: ""
  });

  const [imageSrc, setImageSrc] = useState("http://lorempixel.com/400/400/"); // Destructs and creates const imageSrc and function setImageSrc

  const generateImage = () => {
    fetch("https://picsum.photos/400") // Gets URL from API and then returns a promise which updates image source
      .then(response => {
        setImageSrc(response.url);
      })
      .catch(e => {
        // Catches any potential error
        console.log(`Error has occured: ${e}`);
      });
  };

  const handleChange = event => {
    const { name, value } = event.target; // Grabs name and value from the event object passed by OnChange (new text on input)
    setInputText(prevState => ({
      ...prevState, // Preserves the original keys of the state
      [name]: value // Updates the corresponding key with the new value
    }));
  };

  // Object literal used to condense input properties
  const inputObj = {
    type: "text",
    onChange: handleChange,
    maxLength: "15",
    className: "text-input"
  };

  const buttonObj = {
    onClick: generateImage,
    className: "page-button",
    text: "Generate"
  };

  return (
    <div className="container">  
      <div className="image">
        <img src={imageSrc} alt="" />
        <span id="upperText-label">{upperText}</span>
        <span id="lowerText-label">{lowerText}</span>
      </div>
      <div className="inputs">
        <Input
          placeholder={"Upper Text"}
          value={upperText}
          name={"upperText"}
          {...inputObj} // Spread operator used to condense code (See line 36)
        />
        <Input
          placeholder={"Lower Text"}
          value={lowerText}
          name={"lowerText"}
          {...inputObj}
        />
      </div>
      <Button {...buttonObj} />
    </div>
  );
};

export default ImageContainer;
