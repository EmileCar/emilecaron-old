import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import { ActivityProvider } from './contexts/ActivityContext';

function App() {
  return (
    <ActivityProvider>
      <Router>
        <Header />
        <Routes>

            <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </ActivityProvider>

  );
}

export default App;
