import React, { Component } from 'react';
import { FacebookButton } from 'react-social-sharebuttons';


class Facebook extends Component {
   render() {
    const url = 'https://www.facebook.com/pawsclawsbeaksohhmine/';
    const layout = 'box_count';

    return (
      <FacebookButton url={url} />
    );
  }
}

export default Facebook;