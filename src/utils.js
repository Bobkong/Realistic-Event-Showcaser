import axios from 'axios';
import { GoogleApiWrapper } from 'google-maps-react';
import { useEffect } from 'react';

export function calDaysLeft(dateString) {
    // today's date
    const today = new Date();

    // event start date
    const futureDate = new Date(dateString);

    // milliseconds between two days
    const timeDifference = futureDate - today;
    if (timeDifference > 0) {
        return Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    } else {
        return null;
    }
}

export const apiKey = 'AIzaSyAp9layJVehgMEkJd_XUCKR4zVWg5K--YQ';
export const ReadFrench = (text) => {
    axios.post('https://translation.googleapis.com/language/translate/v2', {
        q: text,
        source: 'en',
        target: 'fr',
    },
        {
            params: {
                key: apiKey,
            },
        }).then((response) => {
            const translated = response.data.data.translations[0].translatedText;
            const synth = window.speechSynthesis;
            const utterance = new SpeechSynthesisUtterance(translated);
            utterance.lang = 'fr-FR';
            synth.speak(utterance);

        })
}


export function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;

    const radLat1 = (Math.PI * lat1) / 180;
    const radLon1 = (Math.PI * lon1) / 180;
    const radLat2 = (Math.PI * lat2) / 180;
    const radLon2 = (Math.PI * lon2) / 180;

    const dLat = radLat2 - radLat1;
    const dLon = radLon2 - radLon1;

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c;
    return (distance * 0.62137119).toFixed(1);
}

export function googleMapsLink(lat, lng, name) {
    return `https://www.google.com/maps?q=${lat},${lng}+(${name})`;
}