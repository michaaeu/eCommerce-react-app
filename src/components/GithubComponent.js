import React from 'react'
import GitHub from '@material-ui/icons/GitHub';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    github: {
        margin: theme.spacing(1),
        color: theme.palette.primary.main,
    },
}));

function GitHubComponent() {
    const classes = useStyles();
    return (
        <div>
            <Button variant="container" href="https://github.com/michaaeu">
                <GitHub className={classes.github} />
            </Button>
        </div>
    );
}

export default GitHubComponent