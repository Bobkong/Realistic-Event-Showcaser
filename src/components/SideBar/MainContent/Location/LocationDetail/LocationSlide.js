import { IconButton, List, Typography, makeStyles } from "@material-ui/core"
import { SlideHeader } from "./SlideHeader";
import { useAppState } from "../../../../../state";
import { SlideContent } from "./SlideContent";
import { ReactComponent as IconForward } from '../../../../../assets/icons/arrow-forward.svg'
import { ReactComponent as IconBack } from '../../../../../assets/icons/arrow-back.svg'


const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        width: '100%'
    },

    dot: {
        width: theme.spacing(0.8),
        height: theme.spacing(0.8),
        margin: theme.spacing(0.4),
        borderRadius: theme.spacing(0.4),
        backgroundColor: theme.palette.text.disabled,
        transition: theme.transitions.create('background-color', {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.short
        }),
        '&[data-active="true"]': {
            backgroundColor: theme.palette.primary.main
        }
    },

    dots: {
        display: 'flex',
        justifyContent: 'center',
        flexGrow: '1'
    },

    footer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: theme.palette.common.white,
        position: 'sticky',
        bottom: 0,
        padding: '12px 16px',
        borderTop: `1px solid ${theme.palette.divider}`,
        borderLeft: `1px solid ${theme.palette.divider}`
    },

    iconButton: {
        backgroundColor: theme.palette.primary.main,
        width: '40px',
        height: '40px',
        '& svg path': {
            fill: theme.palette.common.white
        },
        '&:hover': {
            backgroundColor: theme.palette.primary.light
        },
    },

    hiddenIconButton: {
        visibility: 'hidden',
        pointerEvents: 'none',
    }

}));

export const LocationSlide = () => {
    const classes = useStyles();
    const { prev, next, currentSlide, isMobileCollapsed, jsonData } = useAppState();
    const tabLocationLength = jsonData.tabs[currentSlide.tabIndex].locations.length
    const curretnSlideNum = jsonData.tabs[currentSlide.tabIndex].locations.indexOf(currentSlide);

    return (
        <div className={classes.root}>
            <SlideHeader />
            {!isMobileCollapsed && <SlideContent />}
            <div className={classes.footer}>
                <IconButton className={[classes.iconButton,
                    curretnSlideNum == 0 ? classes.hiddenIconButton: ''].join(' ')} onClick={prev}>
                    <IconBack />
                </IconButton>
                <div className={classes.dots}>
                    {jsonData.tabs[currentSlide.tabIndex].locations.map((item, i) => (
                        <div
                            key={`dot-${i}`}
                            className={classes.dot}
                            data-active={i == curretnSlideNum}
                        />
                    ))}
                </div>
                <IconButton className={[classes.iconButton,
                    curretnSlideNum == tabLocationLength - 1 ? classes.hiddenIconButton: ''].join(' ')} onClick={next}>
                    <IconForward />
                </IconButton>
            </div>
        </div>
    )
}