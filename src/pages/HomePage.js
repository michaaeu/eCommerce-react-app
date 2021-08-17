import { makeStyles } from "@material-ui/core";
import Background from '../images/optimized-coffee.jpg';

const useStyles = makeStyles((theme) => ({
    main: {  
        backgroundImage: "url(" + {Background} + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      },
}));

export default function HomePage() {
    const classes = useStyles();
    return (
        <div className={classes.main}>
        </div>
    );
}