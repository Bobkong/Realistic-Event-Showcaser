import {Tile3DLayer} from '@deck.gl/geo-layers';
import { apiKey, checkMobileDevice } from '../utils';

const TILESET_URL = 'https://tile.googleapis.com/v1/3dtiles/root.json';

export function createGoogle3DLayer(setCredits) {
    // google 3d tiles layer
    return  new Tile3DLayer({
                id: 'google-3d-tiles',
                data: TILESET_URL,
                onTilesetLoad: tileset3d => {
                    // Adapt the geometry resolution on mobile
                    tileset3d.options.maximumScreenSpaceError = !checkMobileDevice() ? 6 : 12;
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
                fetch: {headers: {'X-GOOG-API-KEY': apiKey}}
                },
                operation: 'terrain+draw',
          });
}