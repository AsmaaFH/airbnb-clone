import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
