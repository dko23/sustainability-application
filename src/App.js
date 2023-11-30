import logo from './logo.svg';
import './App.css';
import { BrowserRouter as AppRouter, Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dash from './components/Dash'
import Home from './components/Home'
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';


function App() {
  return (
    <div className="App">
    <AppRouter>
        <Navbar />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="AboutUs" element={<AboutUs />} />
            <Route path="Dash" element={<Dash/>} />
          </Routes>
        <Footer />
      </AppRouter>
    
    </div>
  );
}

export default App;





