import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Hops from '../images/hops.jpg'
import Garden from '../images/garden.jpg'
import AppsImg from '../images/phone-img.jpg'
import Websites from '../images/websites.jpg'

class Projects extends Component {

  render() {
    
    return (
      <div id="projects" className="projects__container">
        <Typography variant="headline" component="h1" className="projects__title">
          Web and Mobile Tools
        </Typography>
        <div className="card__container">
          <Card className="card__item">
            <CardMedia
              className="card__media"
              image={Websites}
              title="Websites"
            />
            <CardContent className="projects__card-content">
              <Typography gutterBottom variant="headline" component="h2">
                Vue.js Image Viewer
              </Typography>
              <Typography component="p">
                Vue.js image widget component with auto play option and music player buttons style.
              </Typography>
            </CardContent>
            <div class="projects__card-actions">
              <a className="projects__card-link" href="https://github.com/zorosantana/images-viewer-vue" 
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a className="projects__card-link" 
                href="https://www.npmjs.com/package/images-viewer-vue" 
                target="_blank"
                rel="noopener noreferrer"
              >
                NPM
              </a>
            </div>
          </Card>
          <Card className="card__item">
            <CardMedia
              className="card__media"
              image={AppsImg}
              title="React Native Flux Router Expo"
            />
            <CardContent className="projects__card-content">
              <Typography gutterBottom variant="headline" component="h2">
                R-N Router Flux Expo
              </Typography>
              <Typography component="p">
                React Native router flux with expo support. An alternative way to navigate between mobile screens.
              </Typography>
            </CardContent>
            <div class="projects__card-actions">
              <a className="projects__card-link" 
                href="https://github.com/webstaging/rnrf-expo" 
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a className="projects__card-link" 
                href="https://www.npmjs.com/package/rnrf-expo" 
                target="_blank"
                rel="noopener noreferrer"
              >
                NPM
              </a>
            </div>
          </Card>
          <Card className="card__item">
            <CardMedia
              className="card__media"
              image={Garden}
              title="R-N Monthly Budget"
            />
            <CardContent className="projects__card-content">
              <Typography gutterBottom variant="headline" component="h2">
                R-N Monthly Budget
              </Typography>
              <Typography component="p">
                React Native monthly budget to make general monthly expenses reports based on daily expenses.
              </Typography>
            </CardContent>
            <div class="projects__card-actions">
              <a className="projects__card-link" 
                href="https://github.com/webstaging/monthly-budget" 
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </Card>
          <Card className="card__item">
            <CardMedia
              className="card__media"
              image={Hops}
              title="React SPA Template"
            />
            <CardContent className="projects__card-content">
              <Typography gutterBottom variant="headline" component="h2">
                React SPA Template
              </Typography>
              <Typography component="p">
                Single page app template system to create modern websites using React.
              </Typography>
            </CardContent>
            <div class="projects__card-actions">
              <a className="projects__card-link" 
                href="https://github.com/webstaging/leaf-theme" 
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </Card>
        </div>
      </div>
    )
  }
}

export default Projects;