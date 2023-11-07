import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        left: '12px',
        bottom: '12px',
        zIndex: '100',
    },

    animationCircle: {
        width: 140,
        height: 140,
        border: `3px solid ${theme.palette.common.white }`,
        backgroundColor: theme.palette.primary.light,
        borderRadius: '50%',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        left: '12px',
        bottom: '12px',
        zIndex: '100',
        '& :first-child': {
            transform: 'translate(-119%,-132%) rotate(153deg)',
            width: '48%',
        },
        '& :nth-child(2)': {
            transform: 'translate(70%,-35%) rotate(-66deg)',
            width: '50%',
        },
        '& :nth-child(3)': {
            transform: 'translate(-65%,12%)',
            width: '65%',
        },
    },

    animationCircleActive: {
        '& :first-child': {
            transform: 'translate(-101%,-110%) rotate(153deg)',
        },
        '& :nth-child(2)': {
            transform: 'translate(35%,-40%) rotate(-66deg);',
        },
        '& :nth-child(3)': {
            transform: 'translate(-65%,-10%)',
        },
    },

    character: {
        left: '50%',
        position: 'absolute',
        top: '50%',
        objectFit: 'cover',
        transitionDelay: '.1s',
        transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1.25)',
    },

}));

const AnimationCircle = () => {
    const [showCharacters, setShowCharacters] = useState(false);
    const classes = useStyles();

    const handleMouseEnter = () => {
        setShowCharacters(true);
      };
    
      const handleMouseLeave = () => {
        setShowCharacters(false);
      };

    return (
        <div className={classes.root} onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
            <div className={`${classes.animationCircle} ${showCharacters ? classes.animationCircleActive : ''}`}>
                <img className={`${classes.character}`} src='https://www.paris2024.org/app/themes/2024-reveal/dist/images/mascottes/phryge-revolution1_6eaa96d6.png' />
                <img className={`${classes.character}`} src='https://www.paris2024.org/app/themes/2024-reveal/dist/images/mascottes/phryge-revolution2_6eaa96d6.png' />
                <img className={`${classes.character}`} src='https://www.paris2024.org/app/themes/2024-reveal/dist/images/mascottes/phryge-revolution3_6eaa96d6.png' />
            </div>
        </div>

    );
};

export default AnimationCircle;
