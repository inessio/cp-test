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
import ReplyRoundedIcon from '@material-ui/icons/ReplyRounded';

const drawerWidth = 70;
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },  
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    title: {
      flexGrow: 1,
    },
    buttonStyle:{
        paddingLeft:'30px',
        paddingRight:'30px',
        paddingTop:'8px',
        paddingBottom:'8px'
    }
   
  }));

const NavTop = () => {
    const classes = useStyles();
    return (
        <AppBar position="fixed" color="inherit" className={classes.appBar}>
            <Paper>
            <Toolbar>
                <Typography component="h5" variant="h6" color="inherit" noWrap className={classes.title}>
            
                </Typography>
                <IconButton color="inherit">
                    <Badge  color="inherit">
                    <RestoreIcon />
                    </Badge>
                </IconButton>
                <IconButton color="inherit">
                    <Badge badgeContent={4} color="danger">
                    <NotificationsIcon />
                    </Badge>
                </IconButton>
                
                <IconButton color="inherit" className={classes.customFlow}>
                    <Badge color="inherit">
                    <AccountCircle />
                    </Badge>
                </IconButton>
                </Toolbar>
            </Paper>

            <Paper>
            <Toolbar className={classes.toolbar}>
            <IconButton color="inherit">
                    <Badge  color="inherit">
                    <ReplyRoundedIcon />
                    </Badge>
                </IconButton>
                <Typography component="h5" variant="h6" color="inherit" noWrap className={classes.title}>
                Invoice
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
                    
                    <Button variant="contained" color="primary"  size='large' >
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