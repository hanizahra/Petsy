import React, { Component } from 'react';
import ShareButton from 'react-social-share-buttons';


class Social extends Component {
  render() {
    return (
      <div>
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

export default Social;