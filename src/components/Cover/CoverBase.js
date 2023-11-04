import { Fade, Grid, makeStyles, useMediaQuery } from "@material-ui/core"
import { useAppState } from "../../state";

const useStyles = makeStyles((theme) => ({
    root: {
        left: theme.spacing(8),
        width: 'auto',
        height: '100vh',
        position: 'absolute',
        color: theme.palette.common.white,
        display: 'flex',
        top: '0',
    },

    rootHidden: {
        pointerEvents: 'none'
    },
}));

const CoverBase = ({ className, children }) => {
    const { showCover } = useAppState();
    const classes = useStyles();
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));
    return (
        <Fade in={showCover}>
            <div
                className={[classes.root, showCover ? '' : classes.rootHidden, className ? className : ''].join(' ')}>
                <Grid container>
                    <Grid item xs={isDesktop ? 5 : 12}>
                        {children[0]}
                    </Grid>
                    <Grid item xs={7}>
                        {children[1]}
                    </Grid>
                </Grid>
            </div>
        </Fade>
    )
}

export default CoverBase;
