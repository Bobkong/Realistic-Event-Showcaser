import { createContext, useState, useContext } from "react"
import { createGoogle3DLayer } from "./layers/google-3d";

export const AppStateContext = createContext();

export const AppStateStore = ({children, jsonData}) => {
    const [credits, setCredits] = useState('');
    const [currentSlide, setCurrentSlide] = useState(null);
    const [mobileExpanded, setMobileExpanded] = useState(false);

    const initViewState = {
        longitude: 2.2945,
        latitude: 48.8584,
        zoom: 15,
        bearing: 90,
        pitch: 60
    };

    const [viewState, setViewState] = useState(initViewState);



    const Google3DLayer = createGoogle3DLayer(setCredits);
    const allLayers = [Google3DLayer];
    const[layers, setLayers] = useState(allLayers);

    return (
        <AppStateContext.Provider
            value={{
                next: ()=> {
                    setCurrentSlide(currentSlide => currentSlide.tab.locations[Math.min(currentSlide.index + 1, currentSlide.tab.locations.length - 1)]);
                },
                prev: ()=> {
                    setCurrentSlide(currentSlide => currentSlide.tab.locations[Math.max(0, currentSlide.index - 1)]);
                },
                reset: ()=>{
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
            }}>
            {children}
        </AppStateContext.Provider>
    )

}

export function useAppState() {
    return useContext(AppStateContext);
  }