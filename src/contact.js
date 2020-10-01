import React from 'react';
import contact from './img/contact.png'

class Contact extends React.Component {
  render() {
    return (
      <button className="contactbutton"><img src={contact} alt="contact"/></button>
    )
  }
}

export default Contact;
