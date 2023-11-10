import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { useAppState } from '../../state';

const useStyles = makeStyles((theme) => ({
    messageBox: {
        position: 'relative',
        backgroundColor: theme.palette.common.white,
        borderRadius: '8px',
        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
        padding: '0px 12px',
        position: 'relative',
        width: '254px',
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            width: '160px',
            display: 'flex',
            flexDirection: 'column-reverse'
        },
    },

    triangle: {
        content: '""',
        position: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%) rotate(180deg)',
        borderWidth: '8px',
        borderStyle: 'solid',
        borderColor: 'transparent transparent #ffffff transparent',
        [theme.breakpoints.down('md')]: {
            top: '-16px',
            bottom: 'auto',
            transform: 'translateX(-50%) rotate(0deg)',
        }
    }
}));

const MessageBox = () => {
    const classes = useStyles();
    const { currentSlide, isMobileCollapsed } = useAppState();

    return (
        <>
            {currentSlide === null && (
                <div className={classes.messageBox}>
                    <div className={classes.triangle}></div>
                    <p>{isMobileCollapsed ? "When viewing a venue slide, tap me for more info!" : "When viewing a venue slide, hover over me for more info!"}</p>
                </div>
            )}

            {currentSlide != null && (
                <img src={currentSlide.tipImage} alt={currentSlide.name} width={isMobileCollapsed ? "140px" : "254px"} height={isMobileCollapsed ? "200px" :  "360px"} />
            )}
        </>


    );
};

export default MessageBox;
