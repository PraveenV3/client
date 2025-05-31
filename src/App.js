import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Projects from './components/Projects';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Projects />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;