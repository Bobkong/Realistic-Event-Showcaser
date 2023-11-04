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
        [theme.breakpoints.up('md')]: {
            marginTop: theme.spacing(8),
            '@media (min-height: 760px)': {
                marginTop: theme.spacing(15)
            }
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

    builtWith: {
        position: 'absolute',
        bottom: theme.spacing(13.5),
        [theme.breakpoints.up('md')]: {
            bottom: theme.spacing(8),
            '@media (min-height: 760px)': {
                bottom: theme.spacing(15)
            }
        },
    },

    builtWithText: {
        opacity: 0.7,
        marginBottom: '12px'
    },

    modelsRoot: {
        position: 'relative',
        width: '100%',
        height: '100vh',
    },

    coverCircle: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        aspectRatio: '1',
        opacity: 0.9
    }


}));

const CoverHero = () => {
    const classes = useStyles();
    const { setShowCover } = useAppState();
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));
    return (
        <CoverBase >
            <div className={classes.textContainer}>
                <Typography color="inherit" variant='subtitle1'>
                    26 Jul - 11 Aug 2024
                </Typography>
                <Typography color="inherit" variant={isDesktop ? 'h1' : 'h2'} className={classes.title}>
                    PARIS 2024
                </Typography>
                <Typography color="inherit" variant={isDesktop ? 'body1' : 'body2'} className={classes.title}>
                    Experience Paris Olympic venues, delve into Olympic stories, and embrace the city's charm to the fullest.
                </Typography>
                <Button
                    size={isDesktop ? 'large' : 'medium'}
                    variant="contained"
                    color="primary"
                    onClick={() => { setShowCover(false) }}
                    endIcon={<NextIcon />}>
                    Explore
                </Button>
                <Box className={classes.builtWith}>
                    <Typography color="inherit" variant='subtitle2' className={classes.builtWithText}>
                        Built with
                    </Typography>
                    <CardMedia component='img' image={googleLogo} alt="google maps" />
                </Box>
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