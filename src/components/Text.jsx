import { useState, useEffect } from "react";
import localizationData from "../localization/main.json"; // Import JSON data
import parse from 'html-react-parser';

const Text = ({ word }) => {
    // Set initial language based on whether "en" is in localStorage
    const [language, setLanguage] = useState(localStorage.getItem("en") ? "en" : "bg");

    // Function to update language state based on "en" presence in localStorage
    const updateLanguage = () => {
        setLanguage(localStorage.getItem("en") ? "en" : "bg");
    };

    useEffect(() => {
        // Listen for `storage` events (cross-tab changes)
        const handleStorageChange = (e) => {
            if (e.key === "en") {
                updateLanguage();
            }
        };

        window.addEventListener("storage", handleStorageChange);

        // Custom event for same-tab updates
        const customEventListener = () => updateLanguage();
        window.addEventListener("localStorageChanged", customEventListener);

        // Clean up listeners on component unmount
        return () => {
            window.removeEventListener("storage", handleStorageChange);
            window.removeEventListener("localStorageChanged", customEventListener);
        };
    }, []);
    
    const getLocalizedWord = (key) => {
        return localizationData?.[language]?.[key] || localizationData?.['bg']?.[key] || key;
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
