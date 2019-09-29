import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './DropDownList.css';

const ITEM_HEIGHT = 48;

export default function DropDownList( props ) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getMeals= (val) =>{
      props.getMeals(val);
      handleClose();
  }
  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <h1 className="Filter">Filter by category</h1>
        <ExpandMoreIcon />
      </IconButton>
      <Menu
        id="LongMenu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: 200,
            marginTop:'3%',
            marginLeft:'1%'
          },
        }}
      >
        {props.options.map(option => (
          <MenuItem onClick={()=>getMeals(option.strCategory)} 
                    key={option.idCategory} 
                    value={option.strCategory} 
                    selected={option === 'Pyxis'}
          >
            {option.strCategory}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}