import { ScenegraphLayer } from '@deck.gl/mesh-layers';
// click listener
const handleIconClick = ({ object}) => {
    if (object) {
        const { openURL } = object;
        window.open(openURL)
    }
};
// hover listener
// const handleIconHover = ({ object, x, y, setTooltipStyle, theme }) => {
//     if (object) {
//         const { name, imgURL, subtitle } = object;
//         const tooltip = document.getElementById('custom-tooltip');
//         const newTooltipStyle = {
//             display: 'flex',
//             top: `${y - 190}px`,
//             left: `${x - 150}px`,
//             position: "absolute",
//             justifyContent: 'flex-end',
//             backgroundColor: `${theme.palette.common.white}`,
//             borderRadius: '12px',
//             overflow: 'hidden',
//             flexDirection: 'column',
//             width: '300px',
//             boxShadow: '0px 11px 15px -7px rgba(0,0,0,0.16),0px 24px 38px 3px rgba(0,0,0,0.08),0px 9px 46px 8px rgba(0,0,0,0.04)'
//         }
//         setTooltipStyle(newTooltipStyle);

//         tooltip.innerHTML = `
//             <img src="${imgURL}" alt="${name}" width="300px" height="188px" />
//             <div class='tip-text-container'>
//                 <p class='tip-title'>${name}</p>
//                 <p class='tip-subtitle'>${subtitle}</p>
//             </div>

//         `;
//     } else {
//         setTooltipStyle({ position: "absolute", display: "none" });
//     }
// };

const handleIconHover = ({ object, x, y, setTooltipStyle, theme }) => {
    if (object) {
        const { name, tipImage, tabIndex } = object;
        if (tabIndex === 'recommend') {
            return;
        }
        const tooltip = document.getElementById('custom-tooltip');
        const newTooltipStyle = {
            display: 'flex',
            top: `${y + 16}px`,
            left: `${x - 160}px`,
            position: "absolute",
            justifyContent: 'flex-end',
            backgroundColor: `${theme.palette.common.white}`,
            borderRadius: '12px',
            overflow: 'hidden',
            flexDirection: 'column',
            width: '320px',
            zIndex: '1000',
            boxShadow: '0px 11px 15px -7px rgba(0,0,0,0.16),0px 24px 38px 3px rgba(0,0,0,0.08),0px 9px 46px 8px rgba(0,0,0,0.04)'
        }
        setTooltipStyle(newTooltipStyle);

        tooltip.innerHTML = `
            <img src="${tipImage}" alt="${name}" width="320px" height="320px" />
        `;
    } else {
        setTooltipStyle({ position: "absolute", display: "none" });
    }
};

export function createSceneGraphLayer(location, marker) {
    // graph layer
    const sharedConfig = {
        id: 'scenegraph-layer',
        parameters: {
            depthTest: true,
            depthMask: true
        },
        data: [location],
        scenegraph: marker,
        pickable: true,
        visible: true,
        getOrientation: [0, 0, 90],
        sizeScale: 24,
        _lighting: 'pbr',
        onClick: ({ object}) => handleIconClick({ object}),
        getPosition: d => d.coordinates,
    };
    if (location.tabIndex === 0) {
        return new ScenegraphLayer({
            ...sharedConfig
        });
    } else {
        return new ScenegraphLayer({
            ...sharedConfig,
            _animations: {
                '*': { speed: 1.5 }
            },
        });
    }

}

