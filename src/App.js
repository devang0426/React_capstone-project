import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Main from './components/Main';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/booking" element={<Main />} />
          <Route path="/confirmed" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;