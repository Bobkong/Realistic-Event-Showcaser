import DeckGL from '@deck.gl/react';
import React, { useEffect, useState } from 'react';
import { createGoogle3DLayer } from '../../layers/google-3d';
import { createIconLayer } from '../../layers/icon-layer';
import { useAppState } from '../../state';

const INITIAL_VIEW_STATE = {
    longitude: 2.2945,
    latitude: 48.8584,
    zoom: 15,
    bearing: 90,
    pitch: 60
}


function Map() {
    const { jsonData } = useAppState();

    const [credits, setCredits] = useState('');

    const [tooltipStyle, setTooltipStyle] = useState({ position: "absolute", display: "none" });



    const Google3DLayer = createGoogle3DLayer(setCredits);
    //const IconLayer = createIconLayer(data., setTooltipStyle);
    //const layers = [Google3DLayer, IconLayer];
    const layers = [Google3DLayer];
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
        <div>

            <DeckGL
                container='map'
                initialViewState={INITIAL_VIEW_STATE}
                controller={{ touchRotate: true, minZoom: 12, maxZoom: 17, inertia: 250 }}
                // style={{filter: 'sepia(50%) saturate(80%) brightness(90%) contrast(80%)'}}
                layers={layers}>
                <div id="custom-tooltip" style={tooltipStyle}></div>
            </DeckGL>
            {/* <div style={{position: "relative", width: "70vw", height: "100vh"}}>
                {showControl && <video src="https://ik.imagekit.io/poonr2gma/Phryges(1).mp4?updatedAt=1697687302199" autoPlay="autoplay" muted style={{ width: "100%", height: "100%", objectFit: "cover" }}></video>}
            </div> */}
        </div>
    );
}

export default Map;
