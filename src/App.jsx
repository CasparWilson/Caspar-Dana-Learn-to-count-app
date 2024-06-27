import { DemonstratingProps } from "./components/demo/DemonstratingProps";

function App() {
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
                <h2>Eng.Num</h2>
                <h2>Rus.Num</h2>
            </div>
        </div>
    );
}

export default App;
