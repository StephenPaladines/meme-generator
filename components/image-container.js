import { useState, useEffect } from "react";
import Input from "./input";
import Button from "./button";
import Image from "next/image";

const ImageContainer = () => {
  const [{ upperText, lowerText }, setInputText] = useState({
    upperText: "",
    lowerText: "",
  });

  const [imageSrc, setImageSrc] = useState("https://picsum.photos/400"); // Destructs and creates const imageSrc and function setImageSrc
  const [buttonState, setButtonState] = useState(false);

  const generateImage = () => {
    setButtonState(() => !buttonState);
    fetch("https://picsum.photos/400") // Gets URL from API and then returns a promise which updates image source
      .then((response) => {
        console.log(response);
        setImageSrc(response.url);
        setButtonState(() => !buttonState);
      })
      .catch((e) => {
        // Catches any potential error
        console.log(`Error has occured: ${e}`);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target; // Grabs name and value from the event object passed by OnChange (new text on input)
    setInputText((prevState) => ({
      ...prevState, // Preserves the original keys of the state
      [name]: value, // Updates the corresponding key with the new value
    }));
  };

  // Object literal used to condense input properties
  const inputObj = {
    type: "text",
    onChange: handleChange,
    maxLength: "15",
    className: "w-100% border bg-white-200",
  };

  const buttonObj = {
    onClick: generateImage,
    className: "mx-auto",
    text: "Generate",
    disabled: buttonState,
  };

  const inputArray = [
    { text: "Upper Text", value: upperText, name: "upperText" },
    { text: "Lower Text", value: lowerText, name: "lowerText" },
  ];

  return (
    <div className="grid grid-cols-6 mx-20 mt-10 border border-black max-w-auto">
      <div className="col-span-3 col-start-2 col-end-2 ">
        <div className="w-auto ">
          <Image
            src={imageSrc}
            width="400"
            height="400"
            alt="meme-image"
            className="w-auto"
          />
          <span id="upperText-label">{upperText}</span>
          <span id="lowerText-label">{lowerText}</span>
        </div>
        <Button {...buttonObj} />
      </div>
      <div className="col-span-3 col-start-5 col-end-5">
        <div>
          {inputArray.map((row) => {
            <>
              <label>Hello</label>
              <Input {...row} {...inputObj}></Input>;
            </>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ImageContainer;
