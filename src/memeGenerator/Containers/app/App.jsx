import React from "react";
import Header from "../../Components/header/Header";
import ImageContainer from "../image-container/Image-Container";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className={"page-body"}>
        <Header headerText={"Meme Generator"} />
        <ImageContainer />
      </div>
    );
  }
}

export default App;
