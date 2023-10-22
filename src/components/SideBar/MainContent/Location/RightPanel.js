import { List, Typography, makeStyles, useMediaQuery } from "@material-ui/core"
import { LocationCard } from "./LocationCard";
import { useState } from "react";
import { LocationSlide } from "./LocationDetail/LocationSlide";
import { useAppState } from "../../../../state";

const useStyles = makeStyles((theme) => ({
    root: {
        overflow: 'auto',
    },

    listRoot: {
        padding: '16px 16px',
    },

    mobileListRoot: {
        padding: '16px 0px',
    },

    mobileCollapsedList: {
        // if mobile, show the list horizontally
        width: '100%',
        display: 'flex',
        whiteSpace: 'nowrap',
        overflowX: 'auto',
        paddingInline: '16px'
    },

    mobileCollapsedDescription: {
        [theme.breakpoints.down('sm')]: {
            paddingInline: "16px"
        }
    }
}));

export const RightPanel = ({ currentIndex }) => {
    const {currentSlide, jsonData, mobileExpanded, isMobileCollapsed} = useAppState();
    const classes = useStyles({mobileExpanded: mobileExpanded});
    const tab = jsonData.tabs[currentIndex];

    return (
        <div className={classes.root}>
            {/* show list */}
            {!currentSlide && (
                <div className={isMobileCollapsed ? classes.mobileListRoot : classes.listRoot} >
                    <Typography variant="body2" color="textSecondary" component='p' className={isMobileCollapsed ? classes.mobileCollapsedDescription: ''}>
                        {tab.description}
                    </Typography>
                    <List className={isMobileCollapsed ? classes.mobileCollapsedList: ''}>
                        {tab.locations.map((location, slideNum) => (
                            <LocationCard data={{
                                location: location,
                                tab: tab,
                                slideNum: slideNum
                            }} key={location.name} />
                        ))}
                    </List>
                </div>)
            }

            {/* show location detail slide */}
            {currentSlide && (
                <LocationSlide />
            )}


        </div>
    )
}