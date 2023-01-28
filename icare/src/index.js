import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import DocNavbar from './components/doctorNavbar';
import DoctorDashboardPage from './pages/DoctorDashboardPage';
import DoctorAppointPage from './pages/DoctorAppointPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TreatmentRec from './pages/TreatmentRec';
import EditAvailabilityPage from './pages/EditAvailabilityPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>

      <DocNavbar/>
      <Routes>
        <Route path="/" element={<DoctorDashboardPage />} />
        <Route path="/Dashboard" element={<DoctorDashboardPage />} />
        <Route path="/Appointments" element={<DoctorAppointPage />} />
        <Route path="/Patients" element={<TreatmentRec />} />
        <Route path="/Appointments/EditAppointments" element={<EditAvailabilityPage />} />
        {/* ADD LOGOUT PAGE, PATIENT LIST, NOTIFICATION PAGE ... */}
      </Routes>

    </Router>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
