import { IconLayer } from 'deck.gl';

// click listener
const handleIconClick = (info) => {
    const { object } = info;
    if (object) {
        window.open(object.openURL)
    }
};

// hover listener
const handleIconHover = ({ object, x, y, setTooltipStyle }) => {
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
};

export function createIconLayer(mapData, setTooltipStyle) {

    // icon layer
    return new IconLayer({
        id: 'icon-layer',
        parameters: {
          depthTest: false
        },
        data: mapData.locations,
        pickable: true,
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
        onHover: ({object, x, y}) => handleIconHover({object, x, y, setTooltipStyle}),
      });
}

