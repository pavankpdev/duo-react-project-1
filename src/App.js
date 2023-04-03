import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Dashboard from './pages/dashaboard'
function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
