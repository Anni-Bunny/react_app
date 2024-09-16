import './App.css';
import {Routes, Route} from "react-router-dom";
import {Home} from "./pages/Home";
import {Header} from "./components/Header";
import {About} from "./pages/About";
import {Contact} from "./pages/Contact";
import {Missions} from "./pages/Missions";
import {Multiplanetary} from "./pages/Multiplanetary";
import {Spaceflight} from "./pages/Spaceflight";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="pt-10 bg-black">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/missions" element={<Missions/>}/>
                    <Route path="/multiplanetary" element={<Multiplanetary/>}/>
                    <Route path="/spaceflight" element={<Spaceflight/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
