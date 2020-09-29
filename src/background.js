import React from 'react';
import background from './img/background.jpg'

class Background extends React.Component {
  render() {
    return (
      <div className="background">
        <img src={background} alt='background'/>
      </div>
    )
  }
}

export default Background;
