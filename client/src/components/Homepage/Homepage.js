import React, { Component } from 'react';
<<<<<<< Updated upstream
import Social from '../Social/Social';

=======
import ShareButton from 'react-social-share-buttons';
import { PageHeader, Jumbotron, Button} from 'react-bootstrap';
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes


class Homepage extends Component {
  render() {
    return (
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
      <div>
        <h1>Homepage</h1>
        <p>Welcome, find random animals to adopt!</p><br/>
        <Social />
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
        <div>
            <Jumbotron bsClass = 'jumbotron'>
                <h1>Petsy</h1>
                <p>
                    The premier pet finder for rescue animals
                </p>
                <p>
                    <Button bsStyle="primary" href='/results'>Start Your Search!</Button>

                </p>
            </Jumbotron>;
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

            
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
      </div>

        

    )
  }
}

export default Homepage;