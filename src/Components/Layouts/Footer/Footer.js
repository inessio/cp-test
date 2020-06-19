import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { AppBar,Paper,BottomNavigationAction, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import RestoreIcon from '@material-ui/icons/Restore';

const drawerWidth = 80;
const useStyle = makeStyles((theme) => ({
    appBar:{
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        position: 'fixed',
        right: 0,
        bottom: 0,
        left: 0,
        background: 'white',
        overflow: 'hidden',
        textAlign:'right',
        float:'right',
        flexGrow: 1,
        
    }
}));

const Footer = () => {
    const classes = useStyle();

    return (
        <div>
            <BottomNavigation
            position="fixed" 
            className={classes.appBar} 
            >
                <BottomNavigationAction label="Recents" value="recents" label="Reset Zoom"  showLabel style={{border:'solid 1px black', textAlign:'right',margin:2}}/>
                <BottomNavigationAction label="Recents" value="recent" label="+   100%    -"  showLabel style={{border:'solid 1px black', textAlign:'right'}}/>

            {/* <Button>

            </Button> */}

            </BottomNavigation>
        </div>
    );
}
export default Footer;