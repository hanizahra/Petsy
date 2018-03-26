import React, { Component } from 'react';
<<<<<<< HEAD
import Facebook from '../Social/Facebook';
import Twitter from '../Social/Twitter';
=======
import Social from '../Social/Social';
import ShareButton from 'react-social-share-buttons';
import HomepageSlider from './HomepageSlider';
>>>>>>> 577b00582943765e1c00c15009999600614829b6
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