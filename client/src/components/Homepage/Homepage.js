import React, { Component } from 'react';
import ShareButton from 'react-social-share-buttons';


class Homepage extends Component {
  render() {
    return (
      <div>
        <h1>Homepage</h1>
        <p>Welcome, find random animals to adopt!</p><br/>
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