import 'animate.css';
// index.js or App.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Employees from './pages/Employees';
import FeesPayment from './pages/FeesPayment';
import Home from './pages/Home';
import ScheduleManagement from './pages/ScheduleManagement';
import Students from './pages/Students';


function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="content">
          <Routes>
         
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<Students />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/fees-payment" element={<FeesPayment />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/schedule-management" element={<ScheduleManagement />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
