import React, { Component } from 'react';
import Social from '../Social/Social';



class Homepage extends Component {
  render() {
    return (
      <div>
        <h1>Homepage</h1>
        <p>Welcome, find random animals to adopt!</p><br/>
        <Social />
      </div>
    )
  }
}

export default Homepage;