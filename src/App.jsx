import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import { ActivityProvider } from './contexts/ActivityContext';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-blue/theme.css';

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
