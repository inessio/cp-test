import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography,Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import profile from '../../../static/images/1.jpg';

const barSize = 350;
const useStyle = makeStyles((theme) => ({
    root:{
        float:'left',
        width:barSize,
        textAlign:"justify",
        backgroundColor:'white',
        marginTop:120,
        padding:theme.spacing(5),
    },
    sectionStyle: {
        paddingBottom:30,
        borderBottomWidth: 1, borderBottomColor: 'rgb(243,244,246)',borderBottomStyle: 'solid',
        marginBottom:20,
    },
    large: {
        display: 'flex',
        width: theme.spacing(7),
        height: theme.spacing(7),
      },
      titleStyle:{
         fontSize:20,
         color:'#020b40',
         fontWeight:750,
      },
      textStyle:{
        color:'rgb(128,128,128)',
        fontSize:18,
        paddingBottom:20,
        
      },
      nameStyle:{
          paddingLeft:20,
          fontSize:20,
      },
      status:{
          color:'white',
          fontSize:15,
          padding:theme.spacing(0,3,0,3)
      },
      otherText:{
        fontSize:18,
        color:'#020b40',
        paddingBottom:20,
      }
}));

const RightBar = () => {
    const classes = useStyle();
    return (
        <div className = {classes.root}>
            <Grid >
                <Grid item xs={12} container className={classes.titleStyle} style={{marginBottom:20 }}>
                    <Typography size={14} color="primary" className={classes.titleStyle}>
                        Item Info
                    </Typography>
                </Grid>
                <Grid item xs={12} container className={classes.sectionStyle}>
                    <Typography size={12} className={classes.textStyle}>
                        Owner
                    </Typography>

                    <Grid container direction="row" alignItems="center">
                        <Avatar alt="Remy Sharp" src={profile} className={classes.large} />
                        <Typography size={12} className={classes.nameStyle} color="primary">
                            Komla Sodji
                        </Typography>
                     
                    </Grid>  
                                   
                    
                </Grid>

                <Grid item xs={12} container className={classes.sectionStyle}>
                    <Typography size={12} className={classes.textStyle}>
                        Status
                    </Typography>

                    <Grid container>
                    <Button variant="contained"  className={classes.status} disabled>
                        Draft
                    </Button>
                       
                    </Grid>  
                                   
                    
                </Grid>

                <Grid item xs={12} container className={classes.sectionStyle}>
                    <Typography size={12} className={classes.textStyle}>
                        Created on
                    </Typography>
                    <Grid container>
                        <Typography size={12} className={classes.otherText} color="primary">
                            March 23, 2020
                        </Typography>
                    </Grid>
   
                </Grid>
                <Grid item xs={12} container className={classes.sectionStyle}>
                    <Typography size={12} className={classes.textStyle}>
                        Last Change Made
                    </Typography>
                    <Grid container>
                        <Typography size={12} className={classes.otherText}>
                            June 19, 2020 | 6:30pm
                        </Typography>
                    </Grid>
                    <Grid container>
                        <Typography size={12} className={classes.textStyle} style={{fontStyle:'italic'}}>
                           Komla
                        </Typography>
                    </Grid>
   
                </Grid>

                
            </Grid>
               
                
        </div>
    );
}

export default RightBar;