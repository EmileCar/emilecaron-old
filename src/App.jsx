import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import { ActivityProvider } from './contexts/ActivityContext';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <ActivityProvider>
      <Router>
        <Routes>
            <Route path="/me" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ActivityProvider>
  );
}

export default App;