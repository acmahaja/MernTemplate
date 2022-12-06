import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Dashboard from './Routes/Dashboard'
import Home from './Routes/Home'

function App() {


  
  
  return (
    <div className="App">
      <header>
        <h1>Mern Template</h1>
      </header>
      <Routes >
        <Route index element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes >

    </div>
  );
}

export default App;
