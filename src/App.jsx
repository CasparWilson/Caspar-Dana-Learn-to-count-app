import { englishWords, russianWords } from "./components/LanguageData";
import React from 'react'

function App() {

    const[count, setCount] = React.useState(1)

    return (
        <div>
            <h1>Language Practice - Counting</h1>
            <div className="buttons">
                <button>⬅️</button>
                <button>➡️</button>
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
