import { Link } from "gatsby"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles";
import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Home from '@material-ui/icons/Home';
import Code from '@material-ui/icons/Code';
import Category from '@material-ui/icons/Category';
import logo from '../images/logo-toolbar.png'
import Leaf from '../images/leaf.jpg'
import LazyHero from 'react-lazy-hero'


const styles = {
  title: {
    margin: '.55rem',
    color: 'rgba(0, 0, 0, 0.54)',
    fontWeight: 'bold'
  },
  toolbar: {
    background: '#22292F'
  },
  hamburger: {
    color: '#1F9D55'
  },
  paper: {
    background: '#22292F'
  },
  listItem: {
    color: '#1F9D55'
  }
};

class Header extends Component {

  state = {
    open: false
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    const { classes } = this.props;

    return (
      <div className="header__container">
        <CssBaseline />
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            <IconButton aria-label="Menu" onClick={this.handleDrawerOpen}>
              <MenuIcon className={classes.hamburger} />
            </IconButton>
            <img src={logo} className="app__logo" alt="logo" />
          </Toolbar>
        </AppBar>
        <LazyHero imageSrc={Leaf} 
              isCentered={true}
              minHeight='500px'
              opacity={.4}
              parallaxOffset={100}
              className="hero__container"
              color="darkgreen"
          >
            <h1 className="app__title">
              {this.props.siteTitle}
            </h1>
        </LazyHero>
        <Drawer 
          classes={{paper: classes.paper}}
          variant="persistent"
          anchor="left" 
          open={open}
        >
          <div className="drawer__container drawer">
            <div className="drawer__header">
              <div className={classes.title}>
                App Dev Tools
              </div>
              <IconButton onClick={this.handleDrawerClose}>
                <ChevronLeftIcon />
            </IconButton>
            </div>
            <div>
              <Divider />
              <List>
              <Link to="/#about">
                  <ListItem button>
                      <ListItemIcon>
                        <Home />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography type="body2" className={classes.listItem}>About</Typography>
                        } 
                      />
                  </ListItem>
                </Link>
                <Link to="/#projects">
                  <ListItem button>
                      <ListItemIcon>
                        <Code />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography type="body2" className={classes.listItem}>Projects</Typography>
                        } 
                      />
                  </ListItem>
                </Link>
                <Link to="/#techs">
                  <ListItem button>
                      <ListItemIcon>
                        <Category />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography type="body2" className={classes.listItem}>Techs</Typography>
                        } 
                      />
                  </ListItem>
                </Link>
              </List>
            </div>
          </div>
        </Drawer>
      </div>
    )
  }
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default withStyles(styles)(Header)
