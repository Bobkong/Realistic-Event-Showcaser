import { ListItem, Typography, makeStyles, useTheme } from "@material-ui/core"
import { useAppState } from "../../../../state";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        aspectRatio: '16/10',
        marginBottom: '16px',
        padding: '0px',
        borderRadius: '12px',
        overflow: 'hidden',
        flex: '0 0 auto',
        cursor: 'pointer',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '0px',
            marginRight: '12px',
            width: '300px',
        }
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
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    }
}));

const handleClick = ({data, setCurrentSlide}) => {
    // open location slide
    setCurrentSlide(data)
}

export const LocationCard = ({ data }) => {
    const classes = useStyles();
    const theme = useTheme();
    const {location} = data;
    const {setCurrentSlide} = useAppState();
    

    const cardItemStyle = {
        background: `url(${location.imgURL})`,
        backgroundSize: 'cover',
    }

    return (
        <ListItem className={classes.root} style={cardItemStyle} onClick={() => handleClick({data, setCurrentSlide})}>
            <div className={classes.textContainer}>
                <Typography variant="subtitle1" className={classes.title} component='p'>
                    {location.name}
                </Typography>
                <Typography variant="body2" className={classes.subtitle} component='p'>
                    {location.subtitle}
                </Typography>
            </div>
        </ListItem>
    )
}