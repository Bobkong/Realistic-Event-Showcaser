import DeckGL from '@deck.gl/react';
import React, { useEffect, useState } from 'react';
import { useAppState } from '../../state';
import { createGoogle3DLayer } from '../../layers/google-3d';
import { makeStyles } from '@material-ui/core';
import { SIDEBAR_WIDTH, Slidebar } from '../SideBar/Sidebar';
import {AmbientLight, PointLight, DirectionalLight, LightingEffect} from '@deck.gl/core';

// create ambient light source
const ambientLight = new AmbientLight({
    color: [255, 255, 255],
    intensity: 100000.0
  });
  // create point light source
  const pointLight = new PointLight({
    color: [255, 255, 255],
    intensity: 20000.0,
    // use coordinate system as the same as view state
    position: [-125, 50.5, 5000]
  });
  // create directional light source
  const directionalLight = new DirectionalLight({
    color: [255, 255, 255],
    intensity: 10000.0,
    direction: [-3, -9, -1]
  });
  // create lighting effect with light sources
  const lightingEffect = new LightingEffect({ambientLight, pointLight, directionalLight});
const useStyle = makeStyles((theme) => ({
    root: {
        position: 'relative',
        width: '100vw',
        height: `calc(100vh - 260Px)`,
        [theme.breakpoints.up('lg')]: {
            width: `calc(100% - ${SIDEBAR_WIDTH.lg})`,
            height: '100vh',
        },
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${SIDEBAR_WIDTH.xs})`,
            height: '100vh',
        },
    }
    
}));


function Map() {
    const { jsonData, layers, viewState, tooltipStyle } = useAppState();
    const classes = useStyle();


    // const [showControl, setShowControl] = useState(true);

    // useEffect(() => {
    //     const timeoutId = setTimeout(() => {
    //         setShowControl(false);
    //     }, 3900); 

    //     return () => {
    //         clearTimeout(timeoutId);
    //     };
    // })

    return (
        <div className={classes.root}>

            <DeckGL
                container='map'
                initialViewState={viewState}
                // effect={lightingEffect}
                controller={{ touchRotate: true, minZoom: 12, maxZoom: 17.8, inertia: 250 }}
                // style={{filter: 'sepia(50%) saturate(80%) brightness(90%) contrast(80%)'}}
                layers={layers}>
                <div style={tooltipStyle} id='custom-tooltip'></div>
            </DeckGL>
            {/* <div style={{position: "relative", width: "70vw", height: "100vh"}}>
                {showControl && <video src="https://ik.imagekit.io/poonr2gma/Phryges(1).mp4?updatedAt=1697687302199" autoPlay="autoplay" muted style={{ width: "100%", height: "100%", objectFit: "cover" }}></video>}
            </div> */}
        </div>
    );
}

export default Map;
