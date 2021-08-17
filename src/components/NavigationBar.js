import React from 'react'
import Toolbar from '@material-ui/core/Toolbar';
import Home from '@material-ui/icons/Home';
import { Button, IconButton, Typography, AppBar } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    title: {
        flexGrow: 1,
        textAlign: 'center',
    },
    left: { float: 'left', width: '70px' },
    center: { margin: '0 auto' },
    right: { float: 'right', width: '70px' }
}));

export default function NavigationBar() {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="fixed">
                <Toolbar variant="dense">
                    <div className={classes.left}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            href='/'>
                            <Home />
                        </IconButton>
                    </div>
                    <div className={classes.center}>
                        <Typography
                            variant="h6"
                            style={{ fontFamily: "PACIFICO" }}
                            className={classes.title}>
                            React Shop
                        </Typography>
                    </div>
                    <div className={classes.right}>
                        <Button
                            href='/signin'
                            color="inherit"
                            style={{ fontWeight: "bold" }}>
                            Zaloguj
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
