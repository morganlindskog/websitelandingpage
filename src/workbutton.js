import React from 'react';
import workbutton from './img/workButton.png';
import styles from './style.module.css'

class Workbutton extends React.Component {

  onClick() {
    console.log('WHATS UP!?');
  }

  render() {
    return (
      <button
        className={styles.workbutton}
        id="werk"
        onClick={this.onClick}>
        <img src={workbutton} alt="work"/>
      </button>
    )
  }
}

export default Workbutton
