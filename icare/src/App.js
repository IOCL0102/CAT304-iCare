import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import DocNavbar from './components/doctorNavbar';
import UserProfile from './pages/UserProfile';
import ViewPatientListPage from './pages/ViewPatientListPage';
import AddNewPatientPage from './pages/AddNewPatient';
import DoctorUserProfilePage from './pages/DoctorUserProfilePage';
import PatientProfileMedicalRecord from './pages/PatientProfileMedicalRecord';

const root = ReactDOM.createRoot(document.getElementById('root'));
function App(){
root.render(
  <React.StrictMode>
    <Router>
        
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/viewpatientList" element={<ViewPatientListPage/>}/>
        <Route path="/addnewpatientList" element={<AddNewPatientPage/>}/>
        <Route path="/doctorprofile" element={<DoctorUserProfilePage/>}/>
        <Route path="/patientprofileMedicalRecord" element={<PatientProfileMedicalRecord/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);
}

export default App ;


