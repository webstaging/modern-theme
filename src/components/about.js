import React, { Component } from 'react'
import PropTypes from "prop-types"
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    width: '100%'
  },
  text: {
    color: '#DAE1E7',
    textAlign: 'center',
    padding: '7% 12%',
    background: '#22292F',
    fontSize: window.innerWidth < 720 ? '1rem' : '1.2rem'
  }
};

class About extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root} id="projects">
        <Typography component="p" className={classes.text}>
          “{this.props.siteTitle} is all about giving back to the community by providing open-source web and mobile components built using the latest, and most modern web and mobile technologies available today.” by Zoro Santana
        </Typography>
      </div>
    )
  }
}

About.propTypes = {
  siteTitle: PropTypes.string,
}

About.defaultProps = {
  siteTitle: ``,
}

export default withStyles(styles)(About);