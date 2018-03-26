import React, { Component } from 'react';
import { TwitterTweetButton } from 'react-social-sharebuttons';


class Twitter extends Component {
  render() {
   const url = 'http://brianmartinezjtm.com';
   const layout = 'box_count';

   return (
     <TwitterTweetButton url={url} showFaces={false} />
   );
 }
}

export default Twitter;