
import { ReactComponent as Heaer } from '../../../../../assets/icons/hear.svg'
import { ReactComponent as Locate } from '../../../../../assets/icons/locate.svg'
import { ReactComponent as GoogleMaps } from '../../../../../assets/icons/googlemap.svg'
import { ReactComponent as Website } from '../../../../../assets/icons/website.svg'
import { Typography, makeStyles, IconButton, ButtonBase } from "@material-ui/core"

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
            <HearFrenchButton />
            <LocateButton />
            <GoogleMapseButton />
            <WebsiteButton />
        </div>
    )
}

const HearFrenchButton = () => {
    const classes = useStyle();
    return (
        <ButtonBase className={classes.buttonBase} disableTouchRipple>
            <IconButton className={classes.icon}>
                <Heaer />
            </IconButton>
            <Typography variant='caption' color='primary' component='p'>
                Hear French
            </Typography>
        </ButtonBase>

    )
}

const LocateButton = () => {
    const classes = useStyle();
    return (
        <ButtonBase className={classes.buttonBase} disableTouchRipple>
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
    return (
        <ButtonBase className={classes.buttonBase} disableTouchRipple>
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
    return (
        <ButtonBase className={classes.buttonBase} disableTouchRipple>
            <IconButton className={classes.icon}>
                <Website />
            </IconButton>
            <Typography variant='caption' color='primary' component='p'>
                Website
            </Typography>
        </ButtonBase>

    )
}