import DeckGL from '@deck.gl/react';
import React, { useEffect, useState } from 'react';
import { useAppState } from '../../state';
import { createGoogle3DLayer } from '../../layers/google-3d';
import { makeStyles } from '@material-ui/core';
import { SIDEBAR_WIDTH, Slidebar } from '../SideBar/Sidebar';
import { AmbientLight, PointLight, DirectionalLight, LightingEffect } from '@deck.gl/core';


const useStyle = makeStyles((theme) => ({
    root: {
        position: 'relative',
        width: '100vw',
        height: `calc(100vh - 260Px)`,
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${SIDEBAR_WIDTH.xs})`,
            height: '100vh',
        },
    },

    coverRoot: {
        position: 'relative',
        width: '100vw',
        height: '100vh'
    },

    mapBlock: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        backgroundImage:
            'linear-gradient(to bottom, rgba(21, 8, 62, 1), rgba(21, 8, 62, 0.92) 65%, rgba(21, 8, 62, 0.7))',
        transition: theme.transitions.create('opacity', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    mapBlockHidden: {
        opacity: 0,
        pointerEvents: 'none'
    }

}));


function Map() {
    const { layers, viewState, tooltipStyle, showCover } = useAppState();
    const classes = useStyle();

    return (
        <div className={showCover ? classes.coverRoot : classes.root}>

            <DeckGL
                container='map'
                initialViewState={viewState}
                controller={{ touchRotate: true, minZoom: 12, maxZoom: 17.8, inertia: 250 }}
                // style={{filter: 'sepia(50%) saturate(80%) brightness(90%) contrast(80%)'}}
                layers={layers}>
                <div style={tooltipStyle} id='custom-tooltip'></div>
            </DeckGL>
           
            <div
                className={[classes.mapBlock, showCover ? '' : classes.mapBlockHidden].join(' ')}
            />

        </div>
    );
}

export default Map;
