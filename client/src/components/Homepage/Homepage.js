import React, { Component } from 'react';
import Social from '../Social/Social';
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
                <ShareButton
                compact
                socialMedia={'facebook'}
                url={"https://brian-martinez-portfolio.herokuapp.com/index.html"}
                media={"https://brianmartinezjtm.com"}
                text="adobt this cat"
            /> <br/>
            
            <ShareButton
                compact
                socialMedia={'twitter'}
                url={"https://brian-martinez-portfolio.herokuapp.com/index.html"}
                media={"https://brianmartinezjtm.com"}
                text="adopt this dog"
            />   
            </Jumbotron>

      </div>
    )
  }
}

export default Homepage;