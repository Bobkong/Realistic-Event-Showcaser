import { Box, Button, CardMedia, Typography, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import CoverBase from "./CoverBase";
import { useAppState } from "../../state";
import { ReactComponent as NextIcon } from '../../assets/icons/arrow-forward.svg';
import CoverModels from "./CoverModels";
import googleLogo from '../../assets/images/google-maps-platform.png';
import coverCicle from '../../assets/images/cover-circle.png';

const useStyles = makeStyles((theme) => ({
    textContainer: {
        marginTop: theme.spacing(13.5),
        paddingInline: theme.spacing(8),
        [theme.breakpoints.down('md')]: {
            marginTop: theme.spacing(8),
            paddingInline: theme.spacing(6),
        },
        '& svg path': {
            fill: theme.palette.common.white
        },
    },
    
    title: {
        margin: theme.spacing(1, 0, 2),
        [theme.breakpoints.up('md')]: {
            margin: theme.spacing(1.5, 0, 4)
        }
    },

    modelsRoot: {
        position: 'relative',
        width: '100%',
        height: '100vh',
        marginRight: theme.spacing(8),
    },

    coverCircle: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        aspectRatio: '1',
        opacity: 0.9,
        userSelect: 'none',
        '-webkit-user-select': 'none',
    },

    eventLogo: {
        height: '72px',
        width: 'auto'
    },


}));

const CoverHero = () => {
    const classes = useStyles();
    const { setShowCover, jsonData } = useAppState();
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));
    return (
        <CoverBase >
            <div className={classes.textContainer}>
                
                <Typography color="inherit" variant='subtitle1'>
                    {jsonData.eventStartTime} - {jsonData.eventEndTime}
                </Typography>
                <Typography color="inherit" variant={isDesktop ? 'h3' : 'h4'} className={classes.title}>
                        {jsonData.eventName}
                    </Typography>

                <Typography color="inherit" variant={isDesktop ? 'body1' : 'body2'} className={classes.title}>
                    {jsonData.eventSubtitle}
                </Typography>
                <Button
                    size={isDesktop ? 'large' : 'medium'}
                    variant="contained"
                    color="primary"
                    onClick={() => { setShowCover(false) }}
                    endIcon={<NextIcon />}>
                    Explore
                </Button>
            </div>
            {isDesktop && (
                <div className={classes.modelsRoot}>
                    <CardMedia component='img' image={coverCicle} className={classes.coverCircle} />
                    <CoverModels />
                </div>
            )}


        </CoverBase>
    )
}

export default CoverHero