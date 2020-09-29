import React from 'react';
import about from './img/about.png';

class About extends React.Component {
  render() {
    return (
      <button className="aboutbutton"><img src={about} alt="work"/></button>
    )
  }
}

export default About
