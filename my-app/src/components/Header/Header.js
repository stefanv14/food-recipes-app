import React from 'react';

import {AppBar, Toolbar, Button, Popper, Fade, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import  './Header.css';
import {Link as LinkRoute, Redirect} from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import Auth from '../Header/Auth/Auth';
import { Link } from 'react-scroll';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  button2: {
    margin: theme.spacing(1),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  ToolBar: {
      justifyContent:'space-between',
      backgroundColor: '#fff',
  },
  UserIcon: {
      color: '#333',
      paddingRight: '1.5rem',
      cursor: 'pointer',
      alignSelf: 'center',
      width:'auto',
      [theme.breakpoints.down('xs')]: {
        paddingRight: 0
      }
  },
  Nav: {
      display: 'flex',
  },
  Paper: {
      width: 'auto',
      height: 'auto',
      marginTop: '8%',
      display: 'flex',
      flexDirection: 'column',
      padding: '0.8rem',
      [theme.breakpoints.down('xs')]: {
        marginRight: 0
      }
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
    color: '#333'
  },
  LoginButton: {
    backgroundColor: 'orange',
    width: '60%',
    borderRadius: '20px',
    color: 'white',
    marginTop: '3%',
    alignSelf: 'flex-end',
    border: 'none'
  },
  LogoutButton: {
      backgroundColor: 'orange',
      width: '10%',
      borderRadius: '20px',
      color: 'white',
      alignSelf: 'center',
      border: 'none',
      fontSize: '0.7em'
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [loggedIn, setLoggedIn] =React.useState(false);

  const handleClick = event => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const loginHandle = event => {
    setLoggedIn(true);
    
  }
  const logoutHandle = event => {
    setLoggedIn(false);
    
  }
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={classes.ToolBar}>
          <SearchBar sInput={props.sInput} />
          <nav className="Navigation">
             <AccountCircleRoundedIcon className={classes.UserIcon} 
                                       fontSize="large" 
                                       onClick={handleClick}  />
            {loggedIn ? null :
            <Popper id={id} 
                    open={open} 
                    anchorEl={anchorEl} 
                    transition 
                    className="Popper"> 
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                       <Paper className={classes.Paper}>
                         <Auth classes={classes} 
                               loginHandle={loginHandle} />
                      </Paper>
                    </Fade>
                    )}
            </Popper>}
              <HamburgerMenu loggedIn={loggedIn} 
                            logoutHandle={logoutHandle} />
            <div className="NavItems" style={{display:'flex'}}>
              {loggedIn ? 
                <Button className="myMeals">
                  <LinkRoute className="Link" to="/myMeals">
                    My meals
                  </LinkRoute>
                </Button> : null }
               <Button className="Home">
                  <LinkRoute className="Link" to="/">
                    HOME
                  </LinkRoute>
                </Button> 
                <div className="HomeSections">
                  <Button className={classes.button}>
                      <Link   activeClass="active"
                              to="category"
                              spy={true}
                              smooth={true}
                              hashSpy={true}
                              offset={50}
                              duration={1000}
                      >
                        Categories
                      </Link>
                    </Button>
                  <Button className={classes.button}>
                    <Link activeClass="active"
                          to="about"
                          spy={true}
                          smooth={true}
                          hashSpy={true}
                          offset={50}
                          duration={1000}
                    >
                      About Us
                    </Link>
                  </Button>
                  <Button className={classes.button}>
                    <Link activeClass="active"
                          to="contact"
                          spy={true}
                          smooth={true}
                          hashSpy={true}
                          offset={50}
                          duration={1000}
                    >
                      Contact
                    </Link>
                  </Button>
                </div>
              {loggedIn ? 
              <Button onClick={logoutHandle} 
                      variant="outlined" 
                      className={classes.LogoutButton}>
                              Logout 
              </Button> : <Redirect to="/" />}
            </div>
          </nav>
        </Toolbar>
      </AppBar>
    </div>
  );
}