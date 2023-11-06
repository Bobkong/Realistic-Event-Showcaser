import { Box, Button, CardMedia, Typography, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import { useAppState } from "../../state";
import { checkMobileDevice } from "../../utils";

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        right: '12px',
        top: '12px',
        zIndex: '100',
        color: theme.palette.grey[50]
    },

}));

const RotateHint = () => {
    const classes = useStyles();
    const { showCover } = useAppState();
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