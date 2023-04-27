import { Route, Routes } from 'react-router-dom';
import './App.css';
import DrawCircle from './components/DrawCircle';
import DrawMirrorCircle from './components/DrawMirrorCircle';
import FourQuard from './components/FourQuadr';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<DrawCircle />} />
        <Route path="/task2" element={<DrawMirrorCircle />} />
        <Route path="/task3" element={<FourQuard />} />
      </Routes>
    </div>
  );
}

export default App;
