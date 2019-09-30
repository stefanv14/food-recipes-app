import React from 'react';

import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import './SearchBar.css';

const useStyles = makeStyles(theme => ({
  search: {
    position: 'relative',
    color: '#333',
    border: '1px solid #333',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: '#333',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      width: 'auto',
      '&:focus': {
        width: 'auto',
      },
    },
  }
}));

export default function SearchAppBar(props) {
  const classes = useStyles();

  const handleChange = e => {
    const value = e.target.value;   
    props.sInput(value);
  }
  return (
    <div className={classes.search}>
        <div className={classes.searchIcon}>
            <SearchIcon />
        </div>
        <InputBase
            className="Input"
            placeholder="Search recipes…"
            onChange={handleChange.bind(this)}
            classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
        />
    </div>
  );
}
