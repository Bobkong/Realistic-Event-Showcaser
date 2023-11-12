
import { ReactComponent as Hear } from '../../../../../assets/icons/hear.svg'
import { ReactComponent as Locate } from '../../../../../assets/icons/locate.svg'
import { ReactComponent as GoogleMaps } from '../../../../../assets/icons/googlemap.svg'
import { ReactComponent as Website } from '../../../../../assets/icons/website.svg'
import { Typography, makeStyles, IconButton, ButtonBase } from "@material-ui/core"
import { useAppState } from '../../../../../state'
import { ReadFrench, checkMobileDevice } from '../../../../../utils'

const useStyle = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '20px',
        alignItems: 'start',
        paddingBottom: '16px',
        borderBottom: `1px solid ${theme.palette.divider}`
    },

    buttonBase: {
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        flexDirection: 'column',
        '& svg path': {
            fill: theme.palette.primary.main
        },
    },

    icon: {
        border: `1px solid ${theme.palette.primary.main}`
    }
}));

export const LocationButtons = () => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            {/* only show hear french button on website */}
            {!checkMobileDevice() && (<HearFrenchButton />)}
            <LocateButton />
            <GoogleMapseButton />
            <WebsiteButton />
        </div>
    )
}

const HearFrenchButton = () => {
    const classes = useStyle();
    const {currentSlide} = useAppState();

    return (
        <ButtonBase className={classes.buttonBase} disableTouchRipple onClick={() => ReadFrench(currentSlide.name)}>
            <IconButton className={classes.icon}>
                <Hear />
            </IconButton>
            <Typography variant='caption' color='primary' component='p'>
                Hear French
            </Typography>
        </ButtonBase>

    )
}

const LocateButton = () => {
    const classes = useStyle();
    const {updateViewState, currentSlide, setCurrentLocate} = useAppState();
    return (
        <ButtonBase className={classes.buttonBase} disableTouchRipple onClick={() => {
            updateViewState(currentSlide.coordinates[1], currentSlide.coordinates[0]);
            setCurrentLocate(currentSlide);
        }}>
            <IconButton className={classes.icon}>
                <Locate />
            </IconButton>
            <Typography variant='caption' color='primary' component='p'>
                Locate
            </Typography>
        </ButtonBase>

    )
}

const GoogleMapseButton = () => {
    const classes = useStyle();
    const {currentSlide} = useAppState();
    return (
        <ButtonBase className={classes.buttonBase} disableTouchRipple onClick={() => {
            window.open(`https://www.google.com/maps?q=${currentSlide.coordinates[1]},${currentSlide.coordinates[0]}`)
        }}>
            <IconButton className={classes.icon}>
                <GoogleMaps />
            </IconButton>
            <Typography variant='caption' color='primary' component='p'>
                Google Maps
            </Typography>
        </ButtonBase>

    )
}

const WebsiteButton = () => {
    const classes = useStyle();
    const {currentSlide} = useAppState();
    return (
        <ButtonBase className={classes.buttonBase} disableTouchRipple onClick={() => {
            window.open(currentSlide.openURL)
        }}>
            <IconButton className={classes.icon}>
                <Website />
            </IconButton>
            <Typography variant='caption' color='primary' component='p'>
                Website
            </Typography>
        </ButtonBase>

    )
}