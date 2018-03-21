import React, { Component } from 'react';

class Result extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    if (this.props.result.media && this.props.result.media.photos) {
      let photos = this.props.result.media.photos.photo;
      let thumbnail = photos.find((photo) => photo['@size'] === 'pn')

      return (
        <img src={thumbnail['$t']}/>
      )
    } else {
      return (<div>No image</div>)
    }
  }
}

export default Result;
