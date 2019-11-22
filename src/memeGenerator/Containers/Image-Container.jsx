import React, { useState } from "react";
import ImageComponent from "../Components/Image-Component";

const ImageContainer = () => {
  const [{ upperText, lowerText }, setInputText] = useState({
    upperText: "",
    lowerText: ""
  });

  const [imageSrc, setImageSrc] = useState("http://lorempixel.com/400/400/");

  const generateImage = () => {
    fetch("https://picsum.photos/400").then(response => {
      return setImageSrc(response.url);
    });
  };

  const handleChange = event => {
    const { name, value } = event.target;
    return setInputText(prevState => ({
      ...prevState, // Preserves the keys of the state
      [name]: value // Updates the corresponding state with the value
    }));
  };

  return (
    <ImageComponent
      imageSrc={imageSrc}
      upperText={upperText}
      lowerText={lowerText}
      handleChange={handleChange}
      generateImage={generateImage}
    />
  );
};

export default ImageContainer;
