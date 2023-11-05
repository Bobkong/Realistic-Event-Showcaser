import { Typography, makeStyles, useTheme, Tabs, Tab } from "@material-ui/core"
import { useAppState } from "../../../../../state";
import { LocationButtons } from "./LocaitonButtons";
import { useEffect, useRef, useState } from "react";
import NearbySearch, { NEARBY_LODGING, NEARBY_RESTAURANT, NEARBY_THINGS_TO_DO } from "./NearbySearch";
import { NearbyCard } from "./NearbyCard";
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        paddingInline: '16px'
    },

    textDiv: {
        paddingBlock: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        borderBottom: `1px solid ${theme.palette.divider}`
    },

    nearyByDiv: {
        paddingBlock: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
    },

    tabs: {
        display: 'flex',
        gap: '8px',
        display: 'flex',
        flexWrap: 'wrap'
    },

    defaultTab: {
        padding: '8px 16px',
        borderRadius: '20px',
        border: `1px solid ${theme.palette.primary.main}`,
        color: theme.palette.primary.main,
        cursor: 'pointer'
    },

    selectedTab: {
        padding: '8px 16px',
        borderRadius: '20px',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        cursor: 'pointer'
    },


}));

export const tabInfo = [
    { value: NEARBY_THINGS_TO_DO, label: "Things to Do" },
    { value: NEARBY_RESTAURANT, label: "Restaurant" },
    { value: NEARBY_LODGING, label: "Lodging" },
];


export const SlideContent = () => {
    const classes = useStyles();
    const theme = useTheme();
    const { jsonData, currentSlide, setMapService, mapService } = useAppState();
    const [nearbyResponse, setNearbyResponse] = useState([]);
    const [nearbyTab, setNearbyTab] = useState(tabInfo[0]);
    const nearbySearchRef = useRef(null);

    const handleTabChange = (nearbyTab) => {
        setNearbyResponse([]);
        setNearbyTab(nearbyTab.value);
        nearbySearchRef.current.nearbySearch(nearbyTab.value, mapService)
    };

    useEffect(() => {
        if (currentSlide !=null && nearbySearchRef.current != null) {
            console.log('load nearby')
            handleTabChange(tabInfo[0])
        }
    }, [currentSlide])

    return (
        <div className={classes.root}>
            <LocationButtons />

            <div className={classes.textDiv}>
                <Typography variant="subtitle1" color="primary" component='p' className={classes.subtitle}>
                    {currentSlide.subtitle}
                </Typography>

                {currentSlide.description.map((content, index) => (
                    <Typography variant="body2" color="textPrimary" component='p' className={classes.subtitle}>
                        {content}
                    </Typography>
                ))}
            </div>

            <NearbySearch slide={currentSlide} setMapService={setMapService} setNearbyResponse={setNearbyResponse} ref={nearbySearchRef} jsonData={jsonData}/>

            <div className={classes.nearyByDiv}>
                <Typography variant="subtitle2" color="primary" component='p'>
                    Nearby Recommendations
                </Typography>
                <div className={classes.tabs}>
                    {tabInfo.map((tab) => (
                        <div className={nearbyTab === tab.value ? classes.selectedTab : classes.defaultTab} onClick={() => handleTabChange(tab)}>
                            <Typography variant="caption" color={nearbyTab === tab.value ? 'white' : 'primary'} component='p'>
                                {tab.label}
                            </Typography>
                        </div>
                    ))}
                </div>
                {nearbyResponse.map((item, index) => (
                    <NearbyCard location={item}/>
                ))}

            </div>
        </div>
    )
}