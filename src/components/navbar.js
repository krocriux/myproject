import React, {useEffect, useState} from 'react';
import {Link, withRouter} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button1 from './button1'
import Menu1 from './menu1'
import { logoutUser } from "../actions/logout";



const mystyle = {
    fontfamily: "reross-rectangular,sans-serif",
    fontweight: "400",
    fontstyle: "normal",
  };



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: 120
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));




export default function ButtonAppBar() {
  
  
  const classes = useStyles();

  return (



    <div className={classes.root}>
      <AppBar style={{height: '50%'}} color="white"position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Menu1>
            

            </Menu1>
          </IconButton>
          <Typography variant="h6" style={mystyle} className={classes.title} >
           <h3 style={mystyle}>LibérameApp</h3>
          
          </Typography>
          
          <Button1></Button1>
          
        </Toolbar>
      </AppBar>
      
    </div>
  );
}