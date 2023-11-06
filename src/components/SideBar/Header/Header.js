import React from 'react';
import { IconButton, makeStyles, Button, Typography, CardMedia, useMediaQuery, ClickAwayListener } from '@material-ui/core';
import { ReactComponent as IconSocialShare } from '../../../assets/icons/icon-social-share.svg';
import { ReactComponent as IconCollapse } from '../../../assets/icons/expand-more.svg'
import { ReactComponent as IconExpand } from '../../../assets/icons/expand-less.svg'
import { calDaysLeft } from '../../../utils';
import { useAppState } from '../../../state';
import { useRef } from 'react';
import Share from './Share';

const useStyles = makeStyles((theme) => ({
    root: {
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        marginTop: '16px',
        marginBottom: '24px',
        padding: '0px 24px',
        '& svg path': {
            fill: theme.palette.primary.main
        },
        color: theme.palette.primary.main,
        [theme.breakpoints.down('md')]: {
            marginBottom: '12px',
            padding: '0px 16px',
        }
        // transition: ({ showDelay }) =>
        //     theme.transitions.create('opacity', {
        //         easing: theme.transitions.easing.linear,
        //         duration: 0,
        //         delay: showDelay
        //     }),
        // '&[data-hidden="true"]': {
        //     pointerEvents: 'none',
        //     opacity: 0,
        //     transition: ({ hideDelay }) =>
        //         theme.transitions.create('opacity', {
        //             easing: theme.transitions.easing.linear,
        //             duration: 0,
        //             delay: hideDelay
        //         })
        // },

    },
    line1: {
        alignItems: "center",
        alignSelf: "stretch",
        display: "flex",
        flex: "0 0 auto",
        width: "100%",
        gap: "12px"
    },
    titleDiv: {
        alignItems: 'center',
        display: 'flex',
        flex: '1',
        flexGrow: '1',
        gap: '8px'
    },
    eventLogo: {
        height: '36px',
        width: 'auto'
    },
    line2: {
        display: 'flex',
        gap: '12px',
        alignItems: 'center'
    }
}))

const Header = ({ showDelay = 0, hideDelay = 0 }) => {
    const classes = useStyles({ showDelay, hideDelay });
    const shareRef = useRef();
    const rootRef = useRef();
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));
    const { jsonData, mobileExpanded, setMobileExpanded } = useAppState();
    const daysLeft = calDaysLeft(jsonData.eventStartTime);

    return (
        <div
            ref={rootRef}
            className={[
                classes.root,
            ].join(' ')}
        >
            <div className={classes.line1}>
                <div className={classes.titleDiv}>
                    <Typography variant='h4' color='textPrimary' component='p' >
                        {jsonData.eventName}
                    </Typography>
                    <CardMedia component='img' image={jsonData.eventLogo} className={classes.eventLogo} />
                </div>

                {/* show share button when using desktop or mobile expanded */}
                {(isDesktop || mobileExpanded) && (
                    <ClickAwayListener onClickAway={shareRef?.current ? shareRef.current.hide : () => { }}>
                        <Button
                            startIcon={<IconSocialShare />}
                            color='inherit'
                            onClick={shareRef?.current ? shareRef.current.show : () => { }}
                        >
                            Share
                        </Button>
                    </ClickAwayListener>
                )}

                {!isDesktop && mobileExpanded && (
                    <IconButton
                        onClick={() => {
                            setMobileExpanded(false)
                        }}>
                        <IconCollapse />
                    </IconButton>
                )}
                {!isDesktop && !mobileExpanded && (
                    <IconButton
                        onClick={() => {
                            setMobileExpanded(true);
                        }}>
                        <IconExpand />
                    </IconButton>
                )}

            </div>

            {(isDesktop || mobileExpanded) && daysLeft && (
                <div className={classes.line2}>
                    <Typography variant='body1' color='textPrimary' component='p' >
                        {jsonData.eventStartTime} - {jsonData.eventEndTime}
                    </Typography>

                    <Typography variant='subtitle1' color='textPrimary' component='p' >
                        (in {daysLeft} days)
                    </Typography>
                </div>
            )}
            <Share anchorEl={rootRef?.current} ref={shareRef} />
        </div>
    )
}

export default Header;