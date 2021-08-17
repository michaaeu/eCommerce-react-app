import React from 'react'
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import { Button, IconButton, Typography, AppBar } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    title: {
        flexGrow: 1,
        textAlign: 'center',
    },
    left: { float: 'left', width: '80px'},
    center: { margin: '0 auto' },
    right: { float: 'right' ,width: '80px'}
}));

export default function CenteredTextAppBar() {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <div className={classes.left}>
                        <IconButton edge="start" color="inherit">
                            <MenuIcon />
                        </IconButton>
                    </div>
                    <div className={classes.center}>
                        <Typography
                            variant="h6"
                            style={{ fontFamily: "PACIFICO" }}
                            className={classes.title}
                        >
                            React Shop
                        </Typography>
                    </div>
                    <div className={classes.right}>
                        <Button
                            color="inherit"
                            style={{ fontWeight: "bold" }}>
                            SIGN IN
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
