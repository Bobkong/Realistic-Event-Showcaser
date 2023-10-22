import { Typography, makeStyles, useTheme, IconButton, useMediaQuery } from "@material-ui/core"
import { useAppState } from "../../../../../state";
import { LocationButtons } from "./LocaitonButtons";

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
        borderBottom: `1px solid ${theme.palette.grey[100]}`
    },


    nearyByDiv: {
        paddingBlock: '16px',
    }
    

}));


export const SlideContent = () => {
    const classes = useStyles();
    const theme = useTheme();
    const { reset, currentSlide, isMobileCollapsed } = useAppState();
    
    return (
        <div className={classes.root}>
            <LocationButtons/>

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
            
            <div className={classes.nearyByDiv}>
                <Typography variant="subtitle2" color="primary" component='p'>
                    Nearby Recommendations
                </Typography>
            </div>
        </div>
    )
}