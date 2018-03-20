import React, { Component } from 'react';

class Homepage extends Component {
	render() {
		return (
			<div>
				<h1>Homepage</h1>
				<p>Welcome, find random animals to adopt!</p><br/>
				<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-size="large" data-text="Whats shaking? This pets tail! What you think?" data-hashtags="petsy" data-show-count="false">Tweet</a>
				<script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script><br/>
			</div>
		)
	}
}

export default Homepage;