import React from 'react';
import { ButtonGroup,Button, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DesktopWindowsRoundedIcon from '@material-ui/icons/DesktopWindowsRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import PaletteOutlinedIcon from '@material-ui/icons/PaletteOutlined';
import PowerOutlinedIcon from '@material-ui/icons/PowerOutlined';
import StorageRoundedIcon from '@material-ui/icons/StorageRounded';
import AccountTreeRoundedIcon from '@material-ui/icons/AccountTreeRounded';
import List from '@material-ui/core/List';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  navStyle: {
    marginBottom:'22px',
    color:'white'
  }
}));



const NavLi = () => {
  const classes = useStyles();

  
  return(
      <div className={classes.root}>
         {/* <List >
          <ListItem button >
            <EditRoundedIcon className={classes.icons}/>
          </ListItem>
          <ListItem button  >
            <DesktopWindowsRoundedIcon className={classes.icons}/>       
          </ListItem>
          <ListItem button >
            <PaletteOutlinedIcon className={classes.icons}/>
          </ListItem>
          <ListItem button >
            <AccountTreeRoundedIcon className={classes.icons}/>
          </ListItem>
          <ListItem button >
            <StorageRoundedIcon className={classes.icons} />
          </ListItem>
          <ListItem button >
            <PowerOutlinedIcon className={classes.icons}/>
          </ListItem>
        </List>   */}
      </div>
);

}
    
export default NavLi;