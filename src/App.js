import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Features from './components/Features';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
      </Routes>
    </Router>
  );
}

export default App;
