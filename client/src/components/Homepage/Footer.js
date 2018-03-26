import React, { Component } from 'react';

var style = {
    backgroundColor: "green",
    opacity: .5,
    borderTop: "1px solid #fcd0a4",
    textAlign: "center",
    padding: "20px",
    position: "relative",
    left: "0",
    bottom: "0",
    height: "50px",
    width: "100%",
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '40px',
  width: '100%',
}

function Footer({ elements }) {
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
                { elements }
                <i class=".icon .icon-heart"></i>
            </div>
        </div>
    )
}

export default Footer;