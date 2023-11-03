import { createContext, useState, useContext, useCallback, useEffect } from "react"
import { createGoogle3DLayer } from "./layers/google-3d";
import { useMediaQuery, useTheme } from "@material-ui/core";
import { Easing } from '@tweenjs/tween.js';
import { LinearInterpolator } from '@deck.gl/core';
import FlyToInterpolator from './layers/fly-to-interpolator.js';
import { createSceneGraphLayer } from "./layers/scenegrah-layer";

export const AppStateContext = createContext();
const transitionInterpolator = new LinearInterpolator(['bearing', 'longitude', 'latitude']);

export const AppStateStore = ({ children, jsonData }) => {
    const [credits, setCredits] = useState('');
    const [currentSlide, setCurrentSlide] = useState(null);
    const [currentLocate, setCurrentLocate] = useState(null);
    const [currentTabIndex, setCurrentTabIndex] = useState(0);
    const [mobileExpanded, setMobileExpanded] = useState(false);
    const theme = useTheme();

    const initViewState = {
        longitude: 2.2478,
        latitude: 48.9293,
        zoom: 16.5,
        bearing: 90,
        pitch: 70,
        height: 20
    };

    const [viewState, setViewState] = useState(initViewState);
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));
    const isMobileCollapsed = !isDesktop && !mobileExpanded

    const Google3DLayer = createGoogle3DLayer(setCredits);

    // 3d graph layer
    const [tooltipStyle, setTooltipStyle] = useState({ position: "absolute", display: "none" });
    const defaultLocaiton = jsonData.tabs[0].locations[0];
    const ScenegraphLayer = createSceneGraphLayer(defaultLocaiton, defaultLocaiton.marker, setTooltipStyle, theme, setCurrentSlide, setCurrentTabIndex);
    let allLayers = [Google3DLayer, ScenegraphLayer];
    const [layers, setLayers] = useState(allLayers);

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

    const updateViewState = function (lat, lng) {
        setViewState({
            transitionDuration: 5000,
            ...{ latitude: lat, longitude: lng, zoom: 16.5, bearing: 90, pitch: 70 },
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
                // update view state
                updateViewState(currentSlide.coordinates[1], currentSlide.coordinates[0]);

                // update current locate
                setCurrentLocate(currentSlide);

                // update 3d graph
                const ScenegraphLayer = createSceneGraphLayer(currentSlide, currentSlide.marker, setTooltipStyle, theme, setCurrentSlide, setCurrentTabIndex);
                setLayers([Google3DLayer, ScenegraphLayer]);
            }
        },
        [currentSlide]
    );

    useEffect(() => {
        if (currentLocate != null) {
            // update view state
            updateViewState(currentLocate.coordinates[1], currentLocate.coordinates[0]);

            // update 3d graph
            const ScenegraphLayer = createSceneGraphLayer(currentLocate, currentLocate.marker, setTooltipStyle, theme, setCurrentSlide, setCurrentTabIndex);
            setLayers([Google3DLayer, ScenegraphLayer]);
        }
    }, [currentLocate]);

    useEffect(() => {
        // orbit initially
        console.log('orbit')
        orbit();
    }, []);

    let tabLocationLength, curretnSlideNum
    if (currentSlide) {
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
                tooltipStyle,
                updateViewState,
                setCurrentLocate
            }}>
            {children}
        </AppStateContext.Provider>
    )

}

export function useAppState() {
    return useContext(AppStateContext);
}