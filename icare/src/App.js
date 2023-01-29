import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginDashboard from './pages/LoginDashboard'
import Appointment from './pages/Appointment';
import Notification from './pages/Notification';
import UserProfile from './pages/UserProfile';
import LocationMap from './components/LocationMap';
import TreatmentRec from './pages/TreatmentRec';

function App() {
    return(
        <div>
            <Router>
                <Routes>
                <Route path="/LoginDashboard" element={<LoginDashboard />} />
                <Route path="/Appointment/Map" element={<LocationMap />} />
                <Route path="/Appointment/Details" element={<Appointment />} />
                <Route path="/Treatment" element={<TreatmentRec />} />
                <Route path="/PatientNotification" element={<Notification />} />
                <Route path="/UserProfile" element = {<UserProfile />} />
                <Route path="/LandingPage" element = {<LandingPage />} />
                </Routes>
            </Router>
        </div>
    )
}
export default App;