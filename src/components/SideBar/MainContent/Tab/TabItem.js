
import {
    makeStyles,
    Typography,
    IconButton,
    useTheme,
    ButtonBase
} from '@material-ui/core'
import { useEffect, useState, useRef } from 'react';
import { useAppState } from '../../../../state';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '0px 12px',
        marginBottom: '24px',
        textAlign: 'center',
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
          padding: '0px 0px 8px 0px',
          marginBottom: '0px',
          marginRight: '12px',
          textAlign: 'left',
        }
    },
    
    buttonBase: {
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        flexDirection: 'column'
    },

    tabIconButton: {
        width: '44px',
        height: '44px',
        backgroundColor: theme.palette.grey[50],
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
        '&:hover': {
            backgroundColor: theme.palette.grey[100]
        }
    },

    tabIconButtonSelected: {
        backgroundColor: theme.palette.primaryBlue[95],
        '&:hover': {
            backgroundColor: theme.palette.primaryBlue[90]
        }
    },

    iconImg: {
        width: '20px',
        height: '20px',
        margin: 'auto'
    },

    indicator: {
        display: 'none',
        height: '100%',
        width: '3px',
        backgroundColor: theme.palette.primary.main,
        position: 'absolute',
        top: '0',
        left: '0',
        borderRadius: '2px',
        [theme.breakpoints.down('sm')]: {
            bottom: '0',
            top: 'auto',
            height: '3px',
            width: '100%'
        }
    },

    indicatorShown: {
        display: 'block'
    }
}));

const handleClick = ({tab, setCurrentTabIndex, setCurrentSlide}) => {
    setCurrentSlide(null);
    setCurrentTabIndex(tab.index);
  };

export const TabItem = ({ tab}) => {
    const [selected, setSelected] = useState(false);
    const {setCurrentSlide, currentTabIndex, setCurrentTabIndex} = useAppState();
    useEffect(() => {
        // update selected status
        setSelected(currentTabIndex === tab.index)
    }, [currentTabIndex]);

    
    const classes = useStyles();

    return (
        <div className={classes.root} onClick={() => handleClick({tab, setCurrentTabIndex, setCurrentSlide})}>
            <ButtonBase className={classes.buttonBase} disableTouchRipple>
                <IconButton className={[
                    classes.tabIconButton,
                    selected ? classes.tabIconButtonSelected : ''
                ].join(' ')}>
                    <img
                        src={tab.icon}
                        alt={tab.name}
                        className={classes.iconImg} />
                </IconButton>
                <Typography variant='button'
                    color={selected ? 'primary' : 'textSecondary'}
                    component='p'>
                    {tab.name}
                </Typography>
            </ButtonBase>
            <div className={[
                classes.indicator,
                selected ? classes.indicatorShown : ''
                ].join(' ')}></div>
        </div>

    )
}