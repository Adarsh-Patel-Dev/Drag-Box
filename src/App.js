import './App.css';
import { Clock } from './components/Clock/Clock';
import { Display } from './components/Display/Display';
import { DraggableBox } from './components/DraggableBox/Draggable';
import { Footer } from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Display/>
      <Footer/>
    </div>
  );
}

export default App;
