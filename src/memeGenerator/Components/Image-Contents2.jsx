// Old implementation using classes and states
import React from "react";

class ImageComponent extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="test">
          <div className="inputs">
            <input
              type="text"
              placeholder={"Top Text"}
              value={this.props.image.upperText}
              name={"upperText"}
              onChange={this.props.image.functions.handleChange}
            />
            <input
              type="text"
              placeholder={"Lower Text"}
              value={this.props.image.lowerText}
              name={"lowerText"}
              onChange={this.props.image.functions.handleChange}
            />
            <button onClick={this.props.image.functions.generateImage}>
              Generate
            </button>
          </div>
          <br />
          <div className="img-container">
            <img src={this.props.image.imgSrc} alt="" id="#image" />
            <p id="upperText">{this.props.image.upperText}</p>
            <p id="lowerText">{this.props.image.lowerText}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageComponent;
