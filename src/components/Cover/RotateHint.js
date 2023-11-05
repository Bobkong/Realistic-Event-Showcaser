import { Box, Button, CardMedia, Typography, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import { useAppState } from "../../state";
import { checkMobileDevice } from "../../utils";

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        left: '12px',
        bottom: '12px',
        zIndex: '100',
        color: theme.palette.grey[50]
    },

}));

const RotateHint = () => {
    const classes = useStyles();
    const { showCover } = useAppState();
    const theme = useTheme();
    return (
        <>
            {!checkMobileDevice() && !showCover && (
                <div className={classes.root}>
                    <Typography variant="body2">
                        Hold down "Shift" to rotate
                    </Typography>
                </div>)}
        </>

    )
}

export default RotateHint