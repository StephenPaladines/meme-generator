import React from "react";
import Header from "../../Components/header/Header";
import ImageContainer from "../image-container/Image-Container";
import "./App.css";


const App = () => {
    return (      <div className={"page-body"}>
        <Header headerText={"Meme Generator"} />
        <ImageContainer />
      </div>);
}

export default App;
