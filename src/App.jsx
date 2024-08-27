// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/CustomNavBar';
import WeatherApp from './Components/WeatherApp';
import Favorites from './Components/Favorites';
import Settings from './Components/Settings';
import About from './Components/About';
import './Components/WeatherApp.css';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={<WeatherApp />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
