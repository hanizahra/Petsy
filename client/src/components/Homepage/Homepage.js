import React, { Component } from 'react';
import Social from '../Social/Social';
import ShareButton from 'react-social-share-buttons';
import { PageHeader, Jumbotron, Button} from 'react-bootstrap';

class Homepage extends Component {
  render() {
    return (
        <div>
            <Jumbotron bsClass = 'jumbotron'>
                <h1>Petsy</h1>
                <p>
                    The premier pet finder for rescue animals
                </p>
                <p>
                    <Button bsStyle="primary" href='/results'>Start Your Search!</Button>

                </p>
            </Jumbotron>

            <ShareButton
                compact
                socialMedia={'facebook'}
                url={"https://brian-martinez-portfolio.herokuapp.com/index.html"}
                media={"https://brianmartinezjtm.com"}
                text="adobt this cat"
            />
            
            <ShareButton
                compact
                socialMedia={'twitter'}
                url={"https://brian-martinez-portfolio.herokuapp.com/index.html"}
                media={"https://brianmartinezjtm.com"}
                text="adopt this dog"
            />    
      </div>
    )
  }
}

export default Homepage;