import React, { Component } from 'react'

class Footer extends Component {

  render() {
    
    return (
      <footer className="footer__container">
        © {new Date().getFullYear()}, designed by <span className="footer__designer-text">Zoro Santana</span>
      </footer>
    )
  }
}

export default Footer;