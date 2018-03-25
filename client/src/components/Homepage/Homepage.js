import React, { Component } from 'react';
import Facebook from '../Social/Facebook';
import Twitter from '../Social/Twitter';
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
            <footer><p><Facebook /> 
                <Twitter /></p></footer>

             
      </div>
    )
  }
}

export default Homepage;