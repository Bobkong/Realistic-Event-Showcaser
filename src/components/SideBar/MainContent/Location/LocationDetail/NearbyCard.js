import { CardMedia, IconButton, Typography, makeStyles, useTheme } from "@material-ui/core"
import StarRatings from "react-star-ratings";
import { calculateDistance, googleMapsLink } from "../../../../../utils";
import { useAppState } from "../../../../../state";
import { ReactComponent as Locate } from '../../../../../assets/icons/locate.svg'
import { ReactComponent as GoogleMaps } from '../../../../../assets/icons/googlemap.svg'
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({

    root: {
        display: 'flex',
        gap: '12px',
        alignItems: 'center'
    },

    photo: {
        width: '64px',
        height: '64px',
        objectFit: 'cover',
        borderRadius: '8px',
        boxShadow: theme.shadows[1],
        flexShrink: '0'
    },

    nameRating: {
        height: '64px',
        display: 'flex',
        gap: '4px',
        flexDirection: 'column',
        justifyContent: 'center',
        flex: '1 1 auto'
    },

    ratingDiv: {
        display: 'flex',
        gap: '4px',
        alignItems: 'center',
    },

    button: {
        '& svg path': {
            fill: theme.palette.primary.main
        },
        boxShadow: theme.shadows[4],
        width: '40px',
        height: '40px'
    },

    buttons: {
        display: 'flex',
        gap: '8px'
    },

    name: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        "-webkit-line-clamp": 2,
        display: "-webkit-box",
        "-webkit-box-orient": "vertical",
        wordBreak: 'keep-all',
    }

}));

const handleClick = (location, setCurrentLocate) => {
    // open location slide
    setCurrentLocate(location)
}

export const NearbyCard = (location) => {
    const classes = useStyles();
    const lat = location['location']['geometry']['location'].lat();
    const lng = location['location']['geometry']['location'].lng();
    const name = location['location']['name'];
    const rating = location['location']['rating'];
    const photo = location['location']['photos'][0].getUrl();
    const placeId = location['location']['place_id'];
    const { currentSlide, setCurrentLocate } = useAppState();
    const distance = `· ${calculateDistance(currentSlide.coordinates[1], currentSlide.coordinates[0], lat, lng)} mi`;
    
    const formatLocation = {
        coordinates: [lng + 0.0005, lat + 0.0005, 40], // not overlay with building
        imgURL: photo,
        name: name,
        openURL: `https://www.google.com/maps/place/?q=place_id:${placeId}`,
        marker: 'https://ik.imagekit.io/poonr2gma/Realistic3d/venue/mappin.glb?updatedAt=1699157077073',
        tabIndex: 'recommend'
    }

    return (
        <div className={classes.root}>
            <CardMedia component='img' image={photo} className={classes.photo} />
            <div className={classes.nameRating}>
                <Typography variant="caption" color="textPrimary" className={classes.name}>
                    {name}
                </Typography>
                <div className={classes.ratingDiv}>
                    <Typography variant="caption" color="textSecondary">
                        {parseFloat(rating).toFixed(1)}
                    </Typography>
                    <StarRatings
                        rating={rating}
                        starRatedColor={useTheme().palette.secondary.main}
                        starDimension="12px"
                        starSpacing="1px" />
                    <Typography variant="caption" color="textSecondary">
                        {distance}
                    </Typography>
                </div>
            </div>
            <div className={classes.buttons}>
                <IconButton className={classes.button} onClick={() => handleClick(formatLocation, setCurrentLocate)}>
                    <Locate />
                </IconButton>
                <IconButton className={classes.button} onClick={() => {
                    window.open(`https://www.google.com/maps/place/?q=place_id:${placeId}`)
                }}>
                    <GoogleMaps />
                </IconButton>
            </div>
        </div>
    )
}