import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Dashboard from './pages/dashaboard'
import Profile from './pages/profile'
function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;

