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
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

const drawerWidth = 80;
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
    paper: {
      
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
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }

      setOpen(false);
    };

    function handleListKeyDown(event) {
      if (event.key === 'Tab') {
        event.preventDefault();
        setOpen(false);
      }
    }
    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
      if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
      }

      prevOpen.current = open;
    }, [open]);

    return (
      <div className={classes.root}>
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
          <ListItem button 
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
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
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ position: 'fixed', bottom: 0, right: 10, top: 'unset', left: 'unset' }}
              // style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper >
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper> 
      </Drawer>
      
      </div>
      
    );
}

export default SideBar;

