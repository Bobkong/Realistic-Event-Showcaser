import logo from './logo.svg';
import './App.css';
import DeckGL from '@deck.gl/react';
import {Tile3DLayer} from '@deck.gl/geo-layers';
import React, {useState, useEffect} from 'react';
import { IconLayer } from 'deck.gl';
import axios from 'axios';

const TILESET_URL = 'https://tile.googleapis.com/v1/3dtiles/root.json';

const INITIAL_VIEW_STATE = {
  longitude: -122.123801,
  latitude: 37.893394,
  zoom: 16,
  maxZoom: 20,
  pitch: 70,
  bearing: 0,
  height: 20
}


function App() {
  const [credits, setCredits] = useState('');
  const [mapData, setMapData] = useState(null);
  const [tooltipStyle, setTooltipStyle] = useState({ position: "absolute", display: "none" });

  const handleIconClick = (info) => {
    const { object } = info;
    if (object) {
      window.open(object.openURL)
    }
  };

  useEffect(() => {
    axios.get('/mapdata.json')
    .then(response => {
      setMapData(response.data)
    }).catch(error => console.error('Error loading JSON data:', error));
    
  }, []);

  if (mapData == null) {
    return <div>Loading JSON data...</div>;
  }

  const layers = [
    new Tile3DLayer({
      id: 'google-3d-tiles',
      data: TILESET_URL,
      onTilesetLoad: tileset3d => {
        tileset3d.options.onTraversalComplete = selectedTiles => {
          const uniqueCredits = new Set();
          selectedTiles.forEach(tile => {
            const {copyright} = tile.content.gltf.asset;
            copyright.split(';').forEach(uniqueCredits.add, uniqueCredits);
          });
          setCredits([...uniqueCredits].join('; '));
          return selectedTiles;
        };
      },
      loadOptions: {
        fetch: {headers: {'X-GOOG-API-KEY': "AIzaSyAp9layJVehgMEkJd_XUCKR4zVWg5K--YQ"}}
      },
      operation: 'terrain+draw',
      zIndex: 1
    }),

    new IconLayer({
      id: 'icon-layer',
      parameters: {
        depthTest: false
      },
      data: mapData.locations,
      pickable: true,
      // iconAtlas and iconMapping are required
      // getIcon: return a string
      getIcon: d => ({
        url: 'https://ik.imagekit.io/poonr2gma/location_marker.png?updatedAt=1697165020743',
        width: 128, 
        height: 128,
        anchorY: 128
      }),

      sizeScale: 8,
      getPosition: d => d.coordinates,
      getSize: d => 5,
      onClick: handleIconClick,
      onHover: ({ object, x, y }) => {
        if (object) {
          const { name, imgURL } = object;
          const tooltip = document.getElementById('custom-tooltip');
          const newTooltipStyle = {
            display: 'block',
            top: `${y-180}px`,
            left: `${x-100}px`,
            position: "absolute",
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            overflow: 'hidden'
          }
          setTooltipStyle(newTooltipStyle);

          tooltip.innerHTML = `
            <div >
              <img src="${imgURL}" alt="${name}" width="200" height="100" />
              <div class='Tool-tip-text'>${name}</div>
            </div>
          `;
        } else {
          setTooltipStyle({position: "absolute", display: "none"});
        }
      },
    }),
  ];

  return (
    <div className="App">
      <DeckGL 
        container='map'
        initialViewState={INITIAL_VIEW_STATE}
        controller={{touchRotate: true, inertia: 250}}
        layers={layers}>
          <div id="custom-tooltip" style={tooltipStyle}></div>
        </DeckGL>
    </div>
  );
}

export default App;
