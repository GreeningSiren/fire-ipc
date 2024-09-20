import { useState, useEffect } from "react";
import localizationData from "../localization/main.json"; // Import JSON data
import parse from 'html-react-parser';

const Text = ({ word }) => {
    const [language, setLanguage] = useState("bg"); // Default language

    useEffect(() => {
        // Check language from body class, assuming body class contains either 'en' or 'bg'
        if (localStorage.getItem("en")) {
            setLanguage("en");
        }
    }, []); // Runs once when the component mounts

    const getLocalizedWord = (key) => {
        // Access the localization data for the given key and current language
        if (localizationData[language] && localizationData[language][key]) {
            return localizationData[language][key];
        } else {
            return localizationData['bg'][key]; // Fallback to key if translation not found
        }
    };

    return (
        parse(getLocalizedWord(word))
    );
};

import PropTypes from "prop-types";
Text.propTypes = {
    word: PropTypes.string.isRequired,
};

export default Text;
