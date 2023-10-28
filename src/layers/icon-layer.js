import { IconLayer } from 'deck.gl';

// click listener
const handleIconClick = ({object, setCurrentSlide, setCurrentTabIndex}) => {
    console.log(object);
    if (object) {
        setCurrentSlide(object);
        setCurrentTabIndex(object.tabIndex);
    }
};

// hover listener
const handleIconHover = ({ object, x, y, setTooltipStyle, theme }) => {
    if (object) {
        const { name, imgURL } = object;
        const tooltip = document.getElementById('custom-tooltip');
        const newTooltipStyle = {
            display: 'flex',
            top: `${y-190}px`,
            left: `${x-100}px`,
            position: "absolute",
            backgroundColor: `${theme.palette.common.white}`,
            borderRadius: '12px',
            overflow: 'hidden',
            flexDirection: 'column',
            width: '200px',
            boxShadow: '0px 11px 15px -7px rgba(0,0,0,0.16),0px 24px 38px 3px rgba(0,0,0,0.08),0px 9px 46px 8px rgba(0,0,0,0.04)'
        }
        setTooltipStyle(newTooltipStyle);

        tooltip.innerHTML = `
            <img src="${imgURL}" alt="${name}" width="200px" height="100px" />
            <p class='Tool-tip-text'>${name}</p>
        `;
    } else {
        setTooltipStyle({position: "absolute", display: "none"});
    }
};

export function createIconLayer(mapData, setTooltipStyle, theme, currentSlide, setCurrentSlide, setCurrentTabIndex) {
    // icon layer
    return new IconLayer({
        id: 'icon-layer',
        parameters: {
          depthTest: false
        },
        data: mapData,
        pickable: true,
        getIcon: d => ({
          url: (currentSlide != null && currentSlide.name === d.name) ? d.selectedMarker : d.defaultMarker,
          width: 128, 
          height: 128,
          anchorY: 128
        }),
  
        sizeScale: 8,
        getPosition: d => d.coordinates,
        getSize: d => 6,
        onClick: ({object}) => handleIconClick({object, setCurrentSlide, setCurrentTabIndex}),
        onHover: ({object, x, y}) => handleIconHover({object, x, y, setTooltipStyle, theme}),
      });
}

