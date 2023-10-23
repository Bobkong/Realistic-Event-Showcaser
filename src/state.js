import { createContext, useState, useContext, useCallback, useEffect } from "react"
import { createGoogle3DLayer } from "./layers/google-3d";
import { useMediaQuery, useTheme } from "@material-ui/core";
import { createIconLayer } from "./layers/icon-layer";
import { Easing } from '@tweenjs/tween.js';
import { LinearInterpolator } from '@deck.gl/core';
import FlyToInterpolator from './layers/fly-to-interpolator.js';

export const AppStateContext = createContext();
const transitionInterpolator = new LinearInterpolator(['bearing', 'longitude', 'latitude']);

export const AppStateStore = ({ children, jsonData }) => {
    const [credits, setCredits] = useState('');
    const [currentSlide, setCurrentSlide] = useState(null);
    const [currentTabIndex, setCurrentTabIndex] = useState(0);
    const [mobileExpanded, setMobileExpanded] = useState(false);
    const theme = useTheme();

    const initViewState = {
        longitude: 2.2478,
        latitude: 48.9293,
        zoom: 15,
        bearing: 90,
        pitch: 60,
        height: 30
    };

    const [viewState, setViewState] = useState(initViewState);
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));
    const isMobileCollapsed = !isDesktop && !mobileExpanded

    const Google3DLayer = createGoogle3DLayer(setCredits);
    let allLocaitons = [];
    jsonData.tabs.map((tab, index) => {
        allLocaitons.push(...tab.locations);
    });
    const [tooltipStyle, setTooltipStyle] = useState({ position: "absolute", display: "none" });
    let IconLayer = createIconLayer(allLocaitons, setTooltipStyle, theme, currentSlide, setCurrentSlide, setCurrentTabIndex)
    let allLayers = [Google3DLayer, IconLayer];
    const [layers, setLayers] = useState(allLayers);
    // hover tooltip

    const orbit = useCallback(previousTransition => {
        setViewState((viewState) => ({
            ...viewState,
            bearing: viewState.bearing + 120,
            transitionDuration: previousTransition ? 20000 : 25000, // TODO should match gradients with easing
            transitionEasing: previousTransition ? x => x : Easing.Quadratic.In,
            transitionInterpolator,
            onTransitionEnd: orbit
        }));
    }, []);

    const updateViewState = function (viewState) {
        setViewState({
            transitionDuration: 5000,
            ...viewState,
            transitionEasing: Easing.Quadratic.InOut,
            transitionInterpolator: new FlyToInterpolator({ curve: 1.1 }),
            onTransitionEnd: () => {
                orbit();
            }
        });
    };

    useEffect(
        () => {
            if (currentSlide != null) {
                // update icon
                IconLayer = createIconLayer(allLocaitons, setTooltipStyle, theme, currentSlide, setCurrentSlide, setCurrentTabIndex)
                allLayers = [Google3DLayer, IconLayer];
                setLayers(allLayers);
                // update view state
                updateViewState({ latitude: currentSlide.coordinates[1], longitude: currentSlide.coordinates[0], zoom: 15, bearing: 90, pitch: 60});
            }
        },
        [currentSlide]
    );

    useEffect(()=> {
        // orbit initially
        orbit();
    },[]);

    let tabLocationLength, curretnSlideNum
    if(currentSlide) {
        tabLocationLength = jsonData.tabs[currentSlide.tabIndex].locations.length
        curretnSlideNum = jsonData.tabs[currentSlide.tabIndex].locations.indexOf(currentSlide); 
    }
    

    return (
        <AppStateContext.Provider
            value={{
                next: () => {
                    setCurrentSlide(currentSlide => jsonData.tabs[currentSlide.tabIndex].locations[Math.min(curretnSlideNum + 1, tabLocationLength - 1)]);
                },
                prev: () => {
                    setCurrentSlide(currentSlide => jsonData.tabs[currentSlide.tabIndex].locations[Math.max(0, curretnSlideNum - 1)]);
                },
                reset: () => {
                    setCurrentSlide(null);
                },
                credits,
                currentSlide,
                setCurrentSlide,
                mobileExpanded,
                setMobileExpanded,
                jsonData,
                layers,
                viewState,
                isMobileCollapsed,
                currentTabIndex,
                setCurrentTabIndex,
                tooltipStyle
            }}>
            {children}
        </AppStateContext.Provider>
    )

}

export function useAppState() {
    return useContext(AppStateContext);
}