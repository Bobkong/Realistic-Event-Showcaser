import { List, Typography, makeStyles } from "@material-ui/core"
import { SlideHeader } from "./SlideHeader";
import { useAppState } from "../../../../../state";


const useStyles = makeStyles((theme) => {

})

export const LocationSlide = () => {
    const classes = useStyles();
    const {prev, next, currentSlide} = useAppState();

    return (
        <div className={classes.root}>
           <SlideHeader />
            
        </div>
    )
}