import "./App.css";
import { Clock } from "./components/Clock/Clock";
import { Display } from "./components/Display/Display";
import { DraggableBox } from "./components/DraggableBox/Draggable";
import { Footer } from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./components/Pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import { Page2 } from "./components/Pages/Page2/Page2";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </div>
  );
}

export default App;
