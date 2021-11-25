import React, { Component } from "react";

class TextIn extends Component {
  render() {
    return (
      <div className={this.props.class}>
        <input
          autoComplete="off"
          placeholder={this.props.place}
          type={this.props.typeInput}
          className={this.props.textSize}
          onChange={this.props.onChangeButton}
          required
        />
      </div>
    );
  }
}

export default TextIn;
