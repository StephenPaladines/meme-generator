// Old implementation using classes and states
import React from "react";
import ImageComponent from "../../Components/Image-Component";

class ImageContainer extends React.Component {
  constructor() {
    super();
    // No longer needed w/ arrrow function
    // this.generateImage = this.generateImage.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    this.state = {
      upperText: "",
      lowerText: "",
      imgSrc: "",
      functions: {
        handleChange: this.handleChange,
        generateImage: this.generateImage
      }
    };
  }
  componentDidMount() {
    this.generateImage();
  }

  generateImage = () => {
    fetch("https://picsum.photos/400").then(response => {
      console.log(response.url);
      this.setState({ imgSrc: response.url });
    });
  };

  handleChange = event => {
    console.log(event.target);
    // Object destructuring
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Array_destructuring
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return <ImageComponent image={this.state} />;
  }
}

export default ImageContainer;
