import { makeStyles,withStyles } from '@material-ui/core';
import React from 'react';
const useStyles =makeStyles({
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '300px',
        height: '100%',
        backgroundColor: '#253053'
    }
})

function Sidemenu() {
    const classes=useStyles();
    return (
        <div className={classes.sideMenu}>
           
        </div>
    )
}

export default Sidemenu;
