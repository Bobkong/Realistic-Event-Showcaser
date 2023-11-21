import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MessageBox from './MessageBox';
import { useAppState } from '../../state';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        right: '12px',
        bottom: '12px',
        zIndex: '100',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '12px',
        width: '254px',
        [theme.breakpoints.down('md')]: {
            width: '140px',
            left: '12px',
            top: '12px',
            bottom: 'auto',
            flexDirection: 'column-reverse',
        },
    },


    character: {
        height: 140,
        objectFit: 'cover',
        transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1.25)',
        marginInline: 'auto',
        [theme.breakpoints.down('md')]: {
            height: 100,
        },
    }

}));

const Mascot = () => {
    const [gifPlaying, setGifPlaying] = useState(false);
    const [hasShownHint, setHasShownHint] = useState(false);

    const classes = useStyles();
    const { showCover, currentSlide, currentTabIndex, jsonData } = useAppState();

    const handleMouseEnter = () => {
        setGifPlaying(true);
        if(currentSlide != null) {
            setHasShownHint(true);
        }
    };

    const handleMouseLeave = () => {
        setGifPlaying(false);
    };

    return (
        <>
            {!showCover && currentTabIndex == 0 && (
                <div className={classes.root}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    {(currentSlide != null) && (<MessageBox gifPlaying={gifPlaying} hasShownHint={hasShownHint}/>)}
                    <img className={classes.character} src={gifPlaying ? jsonData.mascotGif : jsonData.mascotImg} />
                </div>
            )}
        </>


    );
};

export default Mascot;
