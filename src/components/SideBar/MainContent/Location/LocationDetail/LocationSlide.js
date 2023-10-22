import { List, Typography, makeStyles } from "@material-ui/core"
import { SlideHeader } from "./SlideHeader";
import { useAppState } from "../../../../../state";
import { SlideContent } from "./SlideContent";


const useStyles = makeStyles((theme) => {

})

export const LocationSlide = () => {
    const classes = useStyles();
    const { prev, next, currentSlide, isMobileCollapsed } = useAppState();

    return (
        <div className={classes.root}>
            <SlideHeader />
            {!isMobileCollapsed && <SlideContent />}
        </div>
    )
}