import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import reactLogo from '../images/react.png';
import vueLogo from '../images/vuejs.png';
import gatsbyLogo from '../images/gatsby.png';
import materialuiLogo from '../images/materialui.webp';

const tileData = [
  {
    img: reactLogo,
    title: 'React',
  },
  {
    img: materialuiLogo,
    title: 'Material UI'
  },
  {
    img: gatsbyLogo,
    title: 'Gatsby'
  },
  {
    img: vueLogo,
    title: 'Vue.js'
  }
];

const styles = {
  root: {
    textAlign: 'center',
    padding: '4%',
    color: '#0F2F21',
    background: '#1F9D55',
  },
  designer: {
    fontWeight: 'bold'
  }
};


class Footer extends Component {

  render() {
    const { classes } = this.props;

    return (
      <footer className={classes.root}>
        © {new Date().getFullYear()}, designed by <span className={classes.designer}>Zoro Santana</span>
      </footer>
    )
  }
}

export default withStyles(styles)(Footer);