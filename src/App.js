import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "pages/home_pages/Home"
import Auth from "pages/auth/Auth"
import Dashboard from "pages/dashboard/Dashboard";

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<Auth />} />

          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
