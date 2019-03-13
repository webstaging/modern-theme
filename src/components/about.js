import React, { Component } from 'react'

class About extends Component {

  render() {
    return (
      <div className='about__container' id="projects">
        <p className='about__text'>
          “{this.props.siteTitle} is all about giving back to the community by providing open-source web and mobile components built using the latest, and most modern web and mobile technologies available today.” by Zoro Santana
        </p>
      </div>
    )
  }
}

export default About;