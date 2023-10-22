import { List, Typography, makeStyles } from "@material-ui/core"
import { SlideHeader } from "./SlideHeader";
import { useAppState } from "../../../../../state";
import { SlideContent } from "./SlideContent";
import { useLayoutEffect, useRef } from "react";


const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative'
    },

    dot: {
        width: theme.spacing(1),
        height: theme.spacing(1),
        margin: theme.spacing(0.5),
        borderRadius: theme.spacing(0.5),
        backgroundColor: theme.palette.text.disabled,
        ransition: theme.transitions.create('background-color', {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.short
        }),
        '&[data-active="true"]': {
            backgroundColor: theme.palette.primary.main
        }
    },

    dots: {
        display: 'flex',
        alignItems: 'center',
        minHeight: theme.spacing(4.5),
        alignSelf: 'center'
    },

    footer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: theme.palette.common.white,
        position: 'fixed',
        bottom: 0,
    },
}));

export const LocationSlide = () => {
    const classes = useStyles();
    const { prev, next, currentSlide, isMobileCollapsed, jsonData } = useAppState();
    const curretnSlideNum = jsonData.tabs[currentSlide.tabIndex].locations.indexOf(currentSlide);
    

    return (
        <div className={classes.root}>
            <SlideHeader />
            {!isMobileCollapsed && <SlideContent />}
            <div className={classes.footer}>
                <div className={classes.dots}>
                    {jsonData.tabs[currentSlide.tabIndex].locations.map((item, i) => (
                        <div 
                            key={`dot-%{i}`}
                            className={classes.dot}
                            data-active={i == curretnSlideNum}
                        />
                    ))}
                </div>
                
            </div>
        </div>
    )
}