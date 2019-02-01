import React, { Component } from "react";

export default class BloggetLogo extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    this.videoRef.current.addEventListener(
      "loadeddata",
      this.loadeddataHandler
    );
  }

  componentWillUnmount() {
    this.videoRef.current.removeEventListener(
      "loadeddata",
      this.loadeddataHandler
    );
  }

  loadeddataHandler = event => {
    const logoWidth = this.videoRef.current.clientWidth / 2;
    const logoHeight = this.videoRef.current.clientHeight / 2;
    this.setState({ logoWidth, logoHeight, logoOpacity: 1 });
    this.videoRef.current.removeEventListener(
      "loadeddata",
      this.loadeddataHandler
    );
  };

  render() {
    return (
      <video
        style={{
          width: this.state.logoWidth,
          height: this.state.logoHeight,
          opacity: this.state.logoOpacity || 0
        }}
        ref={this.videoRef}
        name="media"
        controls={false}
        autoPlay
        muted
        loop
      >
        <source src="./logo/logo_grey.webm" type="video/webm" />
        <source src="./logo/logo_grey.mp4" type="video/mp4" />
      </video>
    );
  }
}
