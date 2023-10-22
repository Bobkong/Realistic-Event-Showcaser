import { List, Typography, makeStyles } from "@material-ui/core"
import { LocationCard } from "./LocationCard";
import { useState } from "react";
import { LocationSlide } from "./LocationDetail/LocationSlide";
import { useAppState } from "../../../../state";

const useStyles = makeStyles((theme) => ({
    root: {
        overflow: 'auto',
    },

    listRoot: {
        padding: '24px 16px',
        [theme.breakpoints.down('sm')]: {
            padding: '0px 0px'
        }
    },

    cardList: {
        // if mobile, show the list horizontally
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            display: 'flex',
            whiteSpace: 'nowrap',
            overflowX: 'auto',
            paddingInline: "24px",
        }
    },

    tabDescription: {
        [theme.breakpoints.down('sm')]: {
            paddingInline: "24px"
        }
    }
}));

export const RightPanel = ({ currentIndex }) => {
    const classes = useStyles();
    const {currentSlide, jsonData} = useAppState();
    const tab = jsonData.tabs[currentIndex];

    return (
        <div className={classes.root}>
            {/* show list */}
            {!currentSlide && (
                <div className={classes.listRoot} >
                    <Typography variant="body2" color="textSecondary" component='p' className={classes.tabDescription}>
                        {tab.description}
                    </Typography>
                    <List className={classes.cardList}>
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