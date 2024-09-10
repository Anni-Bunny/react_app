import './App.css';
import {Routes, Route} from "react-router-dom";
import {Home} from "./pages/Home";
import {Header} from "./components/Header";

function App() {
    return (
        <div className="App">
            <div className=''>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
