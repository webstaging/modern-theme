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
    img: vueLogo,
    title: 'Vue.js'
  },
  {
    img: gatsbyLogo,
    title: 'Gatsby'
  }
];

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: '#22292F',
    paddingTop: 60
  },
  gridList: {
    width: window.innerWidth < 720 ? 300 : 500,
    height: 450
  },
  image: {
    width: 150,
    height: window.innerWidth < 720 ? 150 : 'auto',
  }
};

class Techs extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root} id="techs">
        <GridList cellHeight={180} className={classes.gridList}>
          {tileData.map(tile => (
            <GridListTile key={tile.img}>
              <img className={classes.image} src={tile.img} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    )
  }
}

export default withStyles(styles)(Techs);