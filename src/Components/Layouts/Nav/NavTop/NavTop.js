import React from 'react';
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


const drawerWidth = 80;
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),     
      },
    },  
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      }, 
    title: {
      flexGrow: 1,
    },
    topText: {
        flexGrow: 1,
        fontSize:'16px',
        color: 'rgb(189,194,203)',
        fontWeight:'500'
    },
    toolbar: theme.mixins.toolbar,
    buttonStyle:{
        paddingLeft:'30px',
        paddingRight:'30px',   
    },
    topStyle: {
        height:'10px'
    },
    topLink: {
        borderRightWidth: 1, borderRightColor: 'rgb(243,244,246)',borderRightStyle: 'solid',
    },
  }));

const NavTop = () => {
    const classes = useStyles();
    return (
        <AppBar 
        position="fixed" 
        elevation={1} 
        color="inherit" 
        className={classes.appBar} 
        style={{marginTop:'10px'}}
        >
            <Paper elevation={5}>
               <Toolbar variant="dense" className={classes.topStyle}>
                <Typography 
                component="h5" 
                variant="h6" 
                style={{textAlign:"center"}} 
                noWrap 
                className={classes.topText}
                >
                    You are offline. There are changes yet to be saved
                </Typography>
                <Typography className={classes.topLink}>       
                    <Button color='secondary'>Admin Setting</Button> 
                </Typography>
                <Typography className={classes.topLink}>       
                    <Button color='secondary'>What's New?*</Button> 
                </Typography>
               
                <Typography className={classes.topLink}>
                    <IconButton>
                        <Badge>
                        <RestoreIcon />
                        </Badge>
                    </IconButton>
                </Typography>
                
                <Typography className={classes.topLink}>
                    <IconButton >
                        <Badge badgeContent={2}  color='error'>
                        <NotificationsIcon />
                        </Badge>
                    </IconButton>
                </Typography>
                <Typography className={classes.topLink}>
                    <IconButton>
                        <Badge >
                        <AccountCircle />
                        </Badge>
                    </IconButton>
                </Typography>
                
                </Toolbar>
            </Paper>

            
            <Toolbar >
                <IconButton color="secondary">
                    <Badge  color="secondary">
                    <ReplyRoundedIcon />
                    </Badge>
                </IconButton>
                <Typography 
                component="h5" 
                variant="h6" 
                color="inherit" 
                noWrap 
                className={classes.title}
                >
                Invoice
                </Typography>
                <IconButton color="secondary">
                    <Badge  color="secondary">
                    <MoreVertIcon />
                    </Badge>
                </IconButton>
                <IconButton color="secondary">
                    <Badge  color="secondary">
                    <RedoIcon />
                    </Badge>
                </IconButton>
                <IconButton color="secondary">
                    <Badge  color="secondary">
                    <UndoIcon />
                    </Badge>
                </IconButton>
                <IconButton color="secondary">
                    <Badge color="secondary">
                    <ShareOutlinedIcon /> 
                    </Badge>
                </IconButton>
                
                <IconButton color="secondary">
                    <Badge color="secondary">
                    
                    <Button variant="contained" color="primary" className={classes.buttonStyle}>
                        Preview
                    </Button>
                    </Badge>
                </IconButton>
                </Toolbar>     
        </AppBar>
    );
}

export default NavTop;