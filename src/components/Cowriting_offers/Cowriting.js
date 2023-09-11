import React, { useState } from 'react';
import './Cowriting.css'; // Import the CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { allLanguages } from './Alllanguage';
import CowrittingData from './CowrittingData';
const Cowriting = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [isData, setIsData] = useState(true);
    const handleClose = () => {
        setIsOpen(false);
    };

    const handleLanguageChange = (event) => {
        setSelectedLanguage(event.target.value);
    };

    const handleSubmit = () => {
        setIsOpen(false)
        setIsData(false)
        // Handle the submission here, e.g., send selectedLanguage to a server
        console.log('Selected Language:', selectedLanguage);
    };

    return (
        <div className="cowriting-container">
            {isOpen && (
                <div className="red-banner">
                    <div className="banner-content text-white">
                        Please select apropriate language.
                    </div>
                    <div>
                        <button
                            type="button"
                            className="close-button close"
                            onClick={handleClose}
                            aria-label="Close"
                        >
                            <span className="text-dark">&times;</span>
                        </button>
                    </div>
                </div>
            )}
            <div className="form-container mt-5">
                <div className="form-inner">
                    <select
                        className="form-select"
                        onChange={handleLanguageChange}
                        value={selectedLanguage}
                    >
                        <option value="">Select a language</option>
                        {allLanguages.map((language, index) => (
                            <option key={index} value={language.value}>
                                {language.label}
                            </option>
                        ))}
                    </select>
                    <button
                        type="button"
                        className="btn btn-danger mx-5 submit_btn"
                        onClick={handleSubmit}
                        
                        disabled={!selectedLanguage}
                    >
                        Submit
                    </button>
                </div>
            </div>{
                 !isData&&(<div className='mt-5'>   <CowrittingData/></div>)
         
            }
           
        </div>
    );
};

export default Cowriting;
