import { Button, Typography, makeStyles } from '@material-ui/core';
import '../App.css';

const useStyles = makeStyles(theme => ({
    title: {
        textAlign: 'center',
        marginBottom: theme.spacing(8),
        color: theme.palette.primary.contrastText,
    }
}));

export default function HomePage() {
    const classes = useStyles();
    return (
        <div>
            <div className='home-container-main'>
                <Typography
                    variant="h3"
                    style={{ fontFamily: "PACIFICO" }}
                    className={classes.title}>
                    Coming soon...
                </Typography>
                <Button href='/signup' variant="contained" color="primary">Dołącz do nas</Button>
            </div>
        </div>
    );
}