import React from 'react';

import { Button, MenuItem, MenuList, ClickAwayListener, Grow, Paper, Popper } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import './HamburgerMenu.css';
import { Link } from 'react-scroll';
import { Link as LinkRoute } from 'react-router-dom';

function HamburgerMenu(props) {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    function handleToggle() {
      setOpen(prevOpen => !prevOpen);
    }

    function handleClose(event) {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }

      setOpen(false);
    }

    return (
        <nav className="Nav">
           <Button
              ref={anchorRef}
              aria-controls="Menu-List-Grow"                                                    
              aria-haspopup="true"
              onClick={handleToggle}
              style={{zIndex:1000}}
            >
              <MenuIcon />
                &nbsp;<strong>menu</strong>
          </Button>

          <Popper open={open} 
                  anchorEl={anchorRef.current} 
                  keepMounted 
                  transition 
                  disablePortal
          >
              {({ TransitionProps, placement }) => (
                <Grow {...TransitionProps}
                  style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                >
                  <Paper className="Menu-List-Grow">
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList>

                        <MenuItem className="HamburgerHome">
                          <LinkRoute to="/" className="Link">
                              Home
                          </LinkRoute>
                        </MenuItem>
                      <div className="HamburgerSections">
                        <MenuItem>
                          <Link activeClass="active"
                                to="category"
                                spy={true}
                                smooth={true}
                                hashSpy={true}
                                offset={50}
                                duration={1000}
                          >
                              Categorys
                          </Link>
                        </MenuItem>

                        <MenuItem>
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
                        </MenuItem>

                        <MenuItem>
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
                        </MenuItem>
                      </div>  
                        {props.loggedIn ?
                          <MenuItem className="HamburgerMeals">
                            <LinkRoute className="Link" to="/myMeals">My meals</LinkRoute>
                          </MenuItem> : null}
                          
                        {props.loggedIn ?
                          <MenuItem onClick={props.logoutHandle}>
                            Logout
                          </MenuItem> : null}

                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
          </Popper>
        </nav>
    )
}

export default HamburgerMenu;

