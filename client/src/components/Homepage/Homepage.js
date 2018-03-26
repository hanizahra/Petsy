import React, { Component } from 'react';

import Facebook from '../Social/Facebook';
import Twitter from '../Social/Twitter';


import ShareButton from 'react-social-share-buttons';
import HomepageSlider from './HomepageSlider';

import { PageHeader, Jumbotron, Button} from 'react-bootstrap';
import Slider from 'react-slick';

class Homepage extends Component {
  render() {
    return (
        <div>
            <Jumbotron bsClass = 'jumbotron'>
                <h1 id="logo">Petsy</h1>
                <p id="tagline">
                    The premier pet finder for rescue animals
                </p>
                <p id="startButton">
                    <Button bsStyle="primary" href='/results'>Start Your Search!</Button>

                </p>
                

            </Jumbotron>
            <footer><p><Facebook /> 
                <Twitter /></p></footer>

      </div>
    )
  }
}

export default Homepage;