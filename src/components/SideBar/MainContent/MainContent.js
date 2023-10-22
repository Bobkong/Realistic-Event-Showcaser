import React, { useEffect, useState } from 'react'
import {
    makeStyles,
} from '@material-ui/core'
import { Tabs } from './Tab/Tabs'
import { RightPanel } from './Location/RightPanel'
import { useAppState } from '../../../state'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        overflow: 'auto',
        borderTop: `1px solid ${theme.palette.divider}`,
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            borderTop: 'none',
        }
    },

    divider: {
        width: '1px',
        height: '100%',
        backgroundColor: theme.palette.divider,
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    }
}))

export const MainContent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const classes = useStyles();
    const {jsonData} = useAppState();

    return (
        <div className={classes.root}>
            <Tabs currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>
            <div className={classes.divider} />
            <RightPanel currentIndex={currentIndex}/>
        </div>
    )
}