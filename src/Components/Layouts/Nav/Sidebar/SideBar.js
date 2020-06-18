import React from 'react';
import { NavLi } from '../NavLi';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import DesktopWindowsRoundedIcon from '@material-ui/icons/DesktopWindowsRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import PaletteOutlinedIcon from '@material-ui/icons/PaletteOutlined';
import PowerOutlinedIcon from '@material-ui/icons/PowerOutlined';
import StorageRoundedIcon from '@material-ui/icons/StorageRounded';
import AccountTreeRoundedIcon from '@material-ui/icons/AccountTreeRounded';

const drawerWidth = 80;
const db = "";
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      textAlign:"center",
    },
    drawerPaper: {
      width: drawerWidth,
      background:'#020b40'
      
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
    icons:{
      textAlign:"center",
      fontSize: 35,
      paddingLeft: '10px',
      color: 'white'
          
    },
   
  }));

const SideBar = () => {
    const classes = useStyles();

    return (
      <Drawer 
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
      > 
      <br></br>
      <List  position="center">
          <ListItem button>
            <HomeRoundedIcon className={classes.icons}/>
          </ListItem>
      </List>
      <div className={classes.toolbar} />
        <List >
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
        </List>  
      </Drawer>
    );
}

export default SideBar;

