import axios from 'axios';

export function calDaysLeft(dateString) {
    // today's date
    const today = new Date();

    // event start date
    const futureDate = new Date(dateString);

    // milliseconds between two days
    const timeDifference = futureDate - today;
    console.log(dateString);
    if (timeDifference > 0) {
        return Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    } else {
        return null;
    }
}

const apiKey = 'AIzaSyAp9layJVehgMEkJd_XUCKR4zVWg5K--YQ';
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