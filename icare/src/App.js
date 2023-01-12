import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import NotificationCard from './components/NotificationCard';
import LandingPage from './pages/LandingPage';
import LoginDashboard from './pages/LoginDashboard'
import Appointment from './pages/Appointment';
import Notification from './pages/Notification';
import UserProfile from './pages/UserProfile';

function App() {
    let component
    switch (window.location.pathname) {
        case "/LoginDashboard":
            component = <LoginDashboard />            
            break;
        case "/Appointment":
            component = <Appointment />            
            break;
        case "/Notification":
            component = <Notification />            
            break;
        case "/Notification":
            component = <Notification />            
            break;
        case "/UserProfile":
            component = <UserProfile />            
            break;
        case "/LandingPage":
            component = <LandingPage />            
            break;
        default:
            break;
    }
    
    return(
        <div>
            <Navbar />
            {component}
        </div>
    )

    // <div>
      
    //   {/* <PatientDashboard /> */}
    //   {/* <Notification /> */}
    //   {/* <UserProfile /> */}
    //   {/* <LandingPage /> */}
    //   {/* <Navbar /> */}
    //   {/* <button className="btn">Click me, dark!</button> */}
    // </div>
}

export default App;
