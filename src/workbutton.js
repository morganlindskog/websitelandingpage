import React from 'react';
import workbutton from './img/workButton.png';

class Workbutton extends React.Component {
  render() {
    return (
      <button className="workbutton"><img src={workbutton} alt="work"/></button>
    )
  }
}

export default Workbutton
