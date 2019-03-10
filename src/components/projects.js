import React, { Component } from 'react'
import { Link } from "gatsby"
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
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
          Projects
        </Typography>
        <div className="card__container">
          <Card className="card__item">
            <CardMedia
              className="card__media"
              image={Websites}
              title="Websites"
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                Vue.js Image Viewer
              </Typography>
              <Typography component="p">
                Vue.js image widget component with auto play option and music player buttons style.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" href="https://github.com/zorosantana/images-viewer-vue" target="_blank">
                GitHub
              </Button>
              <Button size="small" color="primary" href="https://www.npmjs.com/package/images-viewer-vue" target="_blank">
                NPM
              </Button>
            </CardActions>
          </Card>
          <Card className="card__item">
            <CardMedia
              className="card__media"
              image={AppsImg}
              title="React Native Flux Router Expo"
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                R-N Router Flux Expo
              </Typography>
              <Typography component="p">
                React Native router flux with expo support. An alternative way to navigate between mobile screens.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" href="https://github.com/webstaging/rnrf-expo" target="_blank">
                GitHub
              </Button>
              <Button size="small" color="primary" href="https://www.npmjs.com/package/rnrf-expo" target="_blank">
                NPM
              </Button>
            </CardActions>
          </Card>
          <Card className="card__item">
            <CardMedia
              className="card__media"
              image={Garden}
              title="R-N Monthly Budget"
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                R-N Monthly Budget
              </Typography>
              <Typography component="p">
                React Native monthly budget to make general monthly expenses reports based on daily expenses.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" href="https://github.com/webstaging/monthly-budget" target="_blank">
                GitHub
              </Button>
            </CardActions>
          </Card>
          <Card className="card__item">
            <CardMedia
              className="card__media"
              image={Hops}
              title="React SPA Template"
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                React SPA Template
              </Typography>
              <Typography component="p">
                Single page app template system to create modern websites using React.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" href="https://github.com/webstaging/leaf-theme" target="_blank">
                GitHub
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    )
  }
}

export default Projects