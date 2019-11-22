import React from "react";
import Header from "../../Components/header/Header";
import Footer from "../../Components/footer/Footer";
import ImageContainer from "../Image-Container";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className={"page-body"}>
        <Header />
        <ImageContainer />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
