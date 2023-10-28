import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import { apiKey } from './utils';
export function loadScript(url) {
  // only load once
  if (hasLoadedScript) {
    return;
  }
  hasLoadedScript = true
  const index = window.document.getElementsByTagName("script")[0];
  const script = window.document.createElement("script");

  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
}

let hasLoadedScript = false;
export const NEARBY_RESTAURANT = 'restaurant';
export const NEARBY_LODGING = 'lodging';
export const NEARBY_THINGS_TO_DO = 'tourist_attraction';

class NearbySearch extends Component {
  constructor(props) {
    super(props);
    this.map = null;
    this.service = null;

    this.slide = props.slide;
    this.setMapLoaded = props.setMapLoaded;
    this.setNearbyResponse = props.setNearbyResponse;
  }

  componentDidMount() {
    if (!(window.google && window.google.maps)) {
      this.loadMapScript();
    }
  }

  loadMapScript = () => {
    loadScript(`https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initMap`);
    window.initMap = this.initMap;
  }

  initMap = () => {
    const mapOptions = {
      zoom: 15,
      center: { lat: 20.516960, lng: -100.800262 },
    };

    this.map = new window.google.maps.Map(document.getElementById('map'), mapOptions);
    this.service = new window.google.maps.places.PlacesService(this.map);
    this.setMapLoaded(true);
    this.nearbySearch(NEARBY_RESTAURANT);
  }

  nearbySearch = (type) => {

    const request = {
      location: { lat: this.slide.coordinates[1], lng: this.slide.coordinates[0] },
      radius: 10000,
      type: type,
    };

    if (this.service != null) {
      this.service.nearbySearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          // only keep locations with photos
          const filteredRadius = results.filter(item => item['photos'] && item['photos'].length > 0)
          this.setNearbyResponse(filteredRadius);
          console.log(filteredRadius)
        }
      });
    }

  }

  render() {

    return (
      <div id="map"></div>
    );
  }
}


export default NearbySearch;
