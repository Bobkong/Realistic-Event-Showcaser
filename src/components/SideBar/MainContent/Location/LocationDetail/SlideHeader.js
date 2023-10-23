import { Typography, makeStyles, useTheme, IconButton, useMediaQuery } from "@material-ui/core"
import { useAppState } from "../../../../../state";
import { ReactComponent as IconBack } from '../../../../../assets/icons/arrow-back.svg'
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
    fullRoot: {
        width: '100%',
        maxHeight: '260px',
        aspectRatio: '16/10',
        marginBottom: '16px',
        padding: '0px',
        overflow: 'hidden',
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            marginTop: '16px'
        }
    },

    mobileRoot: {
        width: '100%',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px'
    },

    textContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'end',
        padding: '16px',
        overflow: 'hidden',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.8))',
    },

    title: {
        color: theme.palette.common.white
    },

    address: {
        color: theme.palette.grey[200],
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        "-webkit-line-clamp": 2,
        display: "-webkit-box",
        "-webkit-box-orient": "vertical",
        wordBreak: 'keep-all',

    },

    tabIconButton: {
        width: '40px',
        height: '40px',
        position: 'absolute',
        top: '24px',
        left: '16px',
        backgroundColor: theme.palette.common.white,
        '&:hover': {
            backgroundColor: theme.palette.grey[100]
        },
    },
}));


export const SlideHeader = () => {
    const classes = useStyles();
    const theme = useTheme();
    const { reset, currentSlide, setLoctionSlide, mobileExpanded, setMobileExpanded } = useAppState();
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));


    const [backgroundStyle, setBackgroundStyle] = useState({
        background: 'none',
    });

    useEffect(() => {
        setBackgroundStyle({
            background: `url(${currentSlide.imgURL})`,
            backgroundSize: 'contain',
        });
    }, [currentSlide]);


    return (
        <div>

            {/* desktop or mobile expanded, show the full header */}
            {(mobileExpanded || isDesktop) && (
                <div className={classes.fullRoot} style={backgroundStyle}>
                    {/* <IconButton className={[
                        classes.tabIconButton,
                    ].join(' ')}
                        onClick={reset}>
                        <IconBack />
                    </IconButton> */}
                    <div className={classes.textContainer}>
                        <Typography variant="subtitle1" className={classes.title} component='p'>
                            {currentSlide.name}
                        </Typography>
                        <Typography variant="body2" className={classes.address} component='p'>
                            {currentSlide.address}
                        </Typography>
                    </div>
                </div>
            )}

            {/* mobile collapsed */}
            {!mobileExpanded && !isDesktop && (
                <div className={classes.mobileRoot}>
                    <Typography variant="h4" color="primary" component='p'>
                        {currentSlide.name}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component='p'>
                        {currentSlide.address}
                    </Typography>
                </div>
            )}

        </div>
    )
}