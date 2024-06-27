import { englishWords, russianWords } from "./components/LanguageData";
import React from "react";

function App() {
    const [count, setCount] = React.useState(1);
    const [showEnglish, setShowEnglish] = React.useState(true);
    const [showRussian, setShowRussian] = React.useState(true);

    function random0to10() {
        return Math.floor(Math.random() * englishWords.length);
    }

    function random0to10Eng() {
        setCount(random0to10());
        setShowEnglish(true);
        setShowRussian(false);
    }

    function random0to10Rus() {
        setCount(random0to10());
        setShowEnglish(false);
        setShowRussian(true);
    }

    function prevNumber() {
        if (count >= 1) {
            setCount((count) => count - 1);
        }
    }

    function nextNumber() {
        if (count < 10) {
            setCount((count) => count + 1);
        }
    }

    function toggleShowEnglish() {
        setShowEnglish((prevValue) => !prevValue);
    }

    function toggleShowRussian() {
        setShowRussian((prevValue) => !prevValue);
    }

    return (
        <div>
            <h1>Language Practice - Counting</h1>
            <div className="buttons">
                <button onClick={prevNumber}>⬅️</button>
                <button onClick={nextNumber}>➡️</button>
                <button onClick={toggleShowEnglish}>Show/hide English</button>
                <button onClick={toggleShowRussian}>Show/hide Russian</button>
                <button onClick={random0to10Eng}>Random (English)</button>
                <button onClick={random0to10Rus}>Random (Russian)</button>
            </div>
            <div className="numbers">
                <h2>{showEnglish ? englishWords[count] : "?"}</h2>
                <h2>{showRussian ? russianWords[count] : "?"}</h2>
            </div>
        </div>
    );
}

export default App;
