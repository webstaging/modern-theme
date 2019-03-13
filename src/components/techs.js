import React, { Component } from 'react'
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

class Techs extends Component {

  render() {
  
    return (
      <div className="techs__container" id="techs">
        <GridList cellHeight={180} className="techs__grid-list">
          {tileData.map(tile => (
            <GridListTile key={tile.img}>
              <img className="techs__grid-image" src={tile.img} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    )
  }
}

export default Techs;