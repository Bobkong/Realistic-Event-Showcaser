import { ListItem, Typography, makeStyles, useMediaQuery, useTheme } from "@material-ui/core"
import { useAppState } from "../../../../state";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxHeight: '260px',
        aspectRatio: '16/10',
        marginBottom: '16px',
        padding: '0px',
        borderRadius: '12px',
        overflow: 'hidden',
        flex: '0 0 auto',
        cursor: 'pointer',
    },

    mobileCollapsedRoot: {
        aspectRatio: '16/10',
        marginRight: '12px',
        width: '300px',
        padding: '0px',
        borderRadius: '12px',
        overflow: 'hidden',
        flex: '0 0 auto',
        cursor: 'pointer',
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

    subtitle: {
        color: theme.palette.grey[200],
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        "-webkit-line-clamp": 2,
        display: "-webkit-box",
        "-webkit-box-orient": "vertical",
        wordBreak: 'keep-all',
    }
}));

const handleClick = ({location, setCurrentSlide}) => {
    // open location slide
    setCurrentSlide(location)
}

export const LocationCard = ({ location }) => {
    const classes = useStyles();
    const theme = useTheme();
    const {setCurrentSlide, isMobileCollapsed} = useAppState();
    

    const cardItemStyle = {
        background: `url(${location.imgURL})`,
        backgroundSize: 'cover',
    }

    return (
        <ListItem className={isMobileCollapsed ? classes.mobileCollapsedRoot : classes.root} 
            style={cardItemStyle} onClick={() => handleClick({location, setCurrentSlide})}>
            <div className={classes.textContainer}>
                <Typography variant="subtitle1" className={classes.title} component='p'>
                    {location.name}
                </Typography>
                {!isMobileCollapsed && <Typography variant="body2" className={classes.subtitle} component='p'>
                    {location.subtitle}
                </Typography>}
            </div>
        </ListItem>
    )
}