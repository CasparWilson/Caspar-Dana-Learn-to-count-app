import { englishWords, russianWords } from "./components/LanguageData";
import React from "react";

function App() {
    const [count, setCount] = React.useState(1);

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

    return (
        <div>
            <h1>Language Practice - Counting</h1>
            <div className="buttons">
                <button onClick={prevNumber}>⬅️</button>
                <button onClick={nextNumber}>➡️</button>
                <button>Show/hide English</button>
                <button>Show/hide Russian</button>
                <button>Random (English)</button>
                <button>Random (Russian)</button>
            </div>
            <div className="numbers">
                <h2>{englishWords[count]}</h2>
                <h2>{russianWords[count]}</h2>
            </div>
        </div>
    );
}

export default App;
