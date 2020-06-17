import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Paper from '@material-ui/core/Paper';
import RestoreIcon from '@material-ui/icons/Restore';
import Button from '@material-ui/core/Button';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const drawerWidth = 72;

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },

    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      marginTop:10,
      maxHeight:150,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
 
    title: {
      flexGrow: 1,
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },

    customBorder: {
        height: 30,
        float: 'top',
        textAlign: 'center',
        paddingBottom: 55
    },
    customFlow : {
        border:'solid 4 red' 
    }
   
  }));

const NavTop = () => {
    const classes = useStyles();
    // const [open, setOpen] = React.useState(true);

    return (
        <AppBar position="absolute" color="inherit" className={clsx(classes.appBar && classes.appBarShift)}>
            {/* <Paper className={classes.customBorder}>
            <Toolbar className={classes.toolbar}>
                <Typography component="h5" variant="h6" color="inherit" noWrap className={classes.title}>
            
                </Typography>
                <IconButton color="inherit">
                    <Badge  color="inherit">
                    <RestoreIcon />
                    </Badge>
                </IconButton>
                <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                    <NotificationsIcon />
                    </Badge>
                </IconButton>
                
                <IconButton color="inherit" className={classes.customFlow}>
                    <Badge color="inherit">
                    <AccountCircle />
                    </Badge>
                </IconButton>
                </Toolbar>
            </Paper> */}

            <Paper>
            <Toolbar className={classes.toolbar}>
                <Typography component="h5" variant="h6" color="inherit" noWrap className={classes.title}>
                {/* hello world */}
                </Typography>
                <IconButton color="inherit">
                    <Badge  color="inherit">
                    <MoreVertIcon />
                    </Badge>
                </IconButton>
                <IconButton color="inherit">
                    <Badge  color="inherit">
                    <RedoIcon />
                    </Badge>
                </IconButton>
                <IconButton color="inherit">
                    <Badge  color="inherit">
                    <UndoIcon />
                    </Badge>
                </IconButton>
                <IconButton color="inherit">
                    <Badge color="inherit">
                    <ShareOutlinedIcon /> 
                    </Badge>
                </IconButton>
                
                <IconButton color="inherit">
                    <Badge color="inherit">
                    
                    <Button variant="contained" color="primary">
                        Preview
                    </Button>
                    </Badge>
                </IconButton>
                </Toolbar>
            </Paper>
           
        </AppBar>
    );
}

export default NavTop;