import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { makeStyles, withStyles,fade } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import DesktopWindowsRoundedIcon from '@material-ui/icons/DesktopWindowsRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import PaletteOutlinedIcon from '@material-ui/icons/PaletteOutlined';
import PowerOutlinedIcon from '@material-ui/icons/PowerOutlined';
import StorageRoundedIcon from '@material-ui/icons/StorageRounded';
import AccountTreeRoundedIcon from '@material-ui/icons/AccountTreeRounded';
import { Card, Container, TextField } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';


const drawerWidth = 80;
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      textAlign:'center'
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
    icons:{
      textAlign:"center",
      fontSize: 35,
      paddingLeft: '10px',
      color: 'white'        
    },
    menuStyle:{
      width:'400px'
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    deleteIcon:{
      padding: theme.spacing(0, 2),
      height: '100%',
      marginRight:'0px',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'right',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
      width:'300px'
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },

    buttonStyle: {
      width:50,
      padding: theme.spacing(2,)
    }
   
  }));

  const StyledMenu = withStyles({
    paper: {
      backgroundColor: 'rgb(26,35,83)',
      width:300,
      maxHeight:'100vh !important',
      display:'block',
      zIndex:1,
      overflow: 'auto',
      flexDirection: 'column',
      left: 0,
      right: 'auto',
      borderRadius:0,
      position:'unset',
      margin:0,
      padding:0,
      top:0,
      textAlign:"center",
      color:'white',
      paddingBottom: '100px',
      // overflowY: 'hidden',
    },
  })((props) => (
    <Menu
      elevation={1}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));

  const StyledMenuItem = withStyles((theme) => ({
    root: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
      textAlign:'center'  
    },
  }))(MenuItem);


    const SideBar = () => {
      const classes = useStyles();
      const [anchorEl, setAnchorEl] = React.useState(null);

      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };

      const handleClose = () => {
        setAnchorEl(null);
    };

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
            aria-controls="simple-menu" 
            aria-haspopup="true" 
            onClick={handleClick}
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
 
      </Drawer>
          <StyledMenu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            style={{marginLeft: drawerWidth}}
            className={classes.root}
          >

            <Grid >
              <Typography style={{marginBottom:100,marginTop:30}}>
                      UI Editor
              </Typography>
            </Grid>  

            <Grid container >
              <Grid item xs={12} style={{marginBottom:'10px'}}>
                <ButtonGroup variant="contained" color="secondary" size="large" >
                  <Button color="primary">Components</Button>
                  <Button style={{backgroundColor:'rgb(67,72,113)'}}>Templates</Button>
                </ButtonGroup>
              </Grid>

              <Grid item xs={12}>
              <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />                                               
                  </div>
                  {/* <div className={classes.deleteIcon}>
                      <HighlightOffRoundedIcon /> 
                    </div>   */}
                  <InputBase
                    placeholder="Search components"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                  />             
              </div> 
              </Grid> 
              <Grid item xs={12}>
              <TextField
                id="outlined-select-currency"
                select
                // label="Select"
                // value={currency}
                // onChange={handleChange}
                helperText=""
                variant="outlined"
                >
                  
                    <MenuItem value="1">
                      text
                    </MenuItem>
                    <MenuItem value="2">
                      text2
                    </MenuItem>
                 
              </TextField>
              </Grid>        
              
            </Grid> 
                   
          {/* </Grid> */}
        </StyledMenu>
      </div>
      
    );
}

export default SideBar;

