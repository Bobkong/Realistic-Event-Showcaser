import React, { useEffect, useState } from 'react'
import {
    Drawer,
    makeStyles,
    useMediaQuery,
} from '@material-ui/core'
import Header from './Header/Header';
import { MainContent } from './MainContent/MainContent';
import { useAppState } from '../../state';


export const SIDEBAR_WIDTH = {
    xs: '460px',
    xsNr: 460,
};

const useStyles = makeStyles((theme) => ({
    drawer: {
        flexShrink: 0,
        zIndex: 1,
        height: 0,
        [theme.breakpoints.up('md')]: {
            height: 'auto',
            '&, & $drawerPaper': {
                width: SIDEBAR_WIDTH.xs,
                inset: '0 0 0 auto !important'
            }
        },
        
    },
    drawerPaper: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.common.white,
        border: 'none',
        [theme.breakpoints.down('sm')]: {
            '&:not($drawerPaperExpanded)': {
                borderTopLeftRadius: theme.spacing(1),
                borderTopRightRadius: theme.spacing(1)
            }
        },
        [theme.breakpoints.up('md')]: {
            height: '100%'
        }
    },
    drawerPaperExpanded: {
        top: 0,
    },

}));


export function Slidebar() {
    const classes = useStyles();
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));
    const { mobileExpanded, setMobileExpanded, showCover } = useAppState()

    useEffect(() => {
        if (isDesktop) {
            setMobileExpanded(false);
        }
    }, [setMobileExpanded, isDesktop]);


    return (
        <div>
            {!showCover && (<Drawer className={classes.drawer}
                anchor={isDesktop ? 'right' : 'bottom'}
                hideBackdrop={true}
                variant='permanent'
                open={true}
                classes={{
                    paper: [classes.drawerPaper, mobileExpanded ? classes.drawerPaperExpanded : ''].join(' ')
                }} >
                <Header />
                <MainContent />

            </Drawer>)}
        </div>

    )
}