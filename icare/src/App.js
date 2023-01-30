import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginDashboard from './pages/LoginDashboard'
import Appointment from './pages/Appointment';
import Notification from './pages/Notification';
import UserProfile from './pages/UserProfile';
import LocationMap from './components/LocationMap';
import TreatmentRec from './pages/TreatmentRec';
import { useAuthContext } from './hooks/useAuthContext';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import DocNavbar from './components/doctorNavbar';
import ViewPatientListPage from './pages/ViewPatientListPage';
import AddNewPatientPage from './pages/EditPatientProfile';
import DoctorUserProfileForm from './pages/DoctorUserProfileForm';
import PatientProfileMedicalRecord from './pages/PatientProfileMedicalRecord';
import DoctorProfileViewPage from './pages/DoctorProfileViewPage';
import EditAvailabilityPage from './pages/EditAvailabilityPage';
import DoctorDashboardPage from './pages/DoctorDashboardPage';
import DoctorAppointPage from './pages/DoctorAppointPage';

function App(){
  const { user } = useAuthContext()

return(
  <div>
    <Router>     
      {/* If user haven't login/signup */}
      {!user &&(
        <>
          <Routes>
            <Route path="/" element={<Navigate to="/LandingPage"/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/signup" element={<SignUpPage/>}/>
            <Route path="/LandingPage" element={<LandingPage/>}/>
          </Routes>
        </>
      )}
      {/* If user login is a doctor */}
      {user && user.type==="doctor" &&(
        <>
          <DocNavbar/>
          <Routes>
            <Route path="/LandingPage" element={<Navigate to="/Dashboard"/>}/>
            <Route path="/login" element={<Navigate to="/Dashboard"/>}/>
            <Route path="/signup" element={<Navigate to="/Dashboard"/>}/>
            <Route path="/viewpatientList" element={<ViewPatientListPage/>}/>
            <Route path="/addnewpatientList" element={<AddNewPatientPage/>}/>
            <Route path="/doctorprofileform" element={<DoctorUserProfileForm/>}/>
            <Route path="/patientprofilemedicalrecord" element={<PatientProfileMedicalRecord/>}/>
            <Route path="/doctorprofileview" element={<DoctorProfileViewPage/>}/>
            <Route path="/Dashboard" element={<DoctorDashboardPage />} />
            <Route path="/Appointments" element={<DoctorAppointPage />} />
            <Route path="/Patients" element={<TreatmentRec />} />
            <Route path="/Appointments/EditAppointments" element={<EditAvailabilityPage />} />
          </Routes>
        </>
      )}
      {/* IF user login is a patient */}
      {user && user.type==="patient" &&(
        <Routes>
          <Route path="/LandingPage" element={<Navigate to="/LoginDashboard"/>}/>
          <Route path="/login" element={<Navigate to="/LoginDashboard"/>}/>
          <Route path="/signup" element={<Navigate to="/LoginDashboard"/>}/>
          <Route path="/LoginDashboard" element={<LoginDashboard />} />
          <Route path="/Appointment/Map" element={<LocationMap />} />
          <Route path="/Appointment/Details" element={<Appointment />} />
          <Route path="/Treatment" element={<TreatmentRec />} />
          <Route path="/PatientNotification" element={<Notification />} />
          <Route path="/UserProfile" element = {<UserProfile />} />
          <Route path="/LandingPage" element = {<LandingPage />} />
        </Routes>
      )}
    </Router>
  </div>
);
}
export default App;