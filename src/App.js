import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DispatcherLogin from "./pages/DispatcherLogin/DispatcherLogin";
import AmbulanceLogin from "./pages/AmbulanceLogin/AmbulanceLogin";
import PatientLogin from "./pages/PatientLogin/PatientLogin";
import WelcomeDispatcher from "./pages/WelcomeDispatcher/WelcomeDispatcher";
import AmbulanceAwaitingDispatch from "./pages/AmbulanceAwaitingDispatch/AmbulanceAwaitingDispatch";
import WelcomePatient from "./pages/WelcomePatient/WelcomePatient";
import { Helmet } from "react-helmet";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/*" element={<DispatcherLogin></DispatcherLogin>} />
          <Route
            path="/ambulance-login"
            element={<AmbulanceLogin></AmbulanceLogin>}
          />
          <Route
            path="/patient-login"
            element={<PatientLogin></PatientLogin>}
          />
          <Route
            path="/welcome-dispatcher"
            element={<WelcomeDispatcher></WelcomeDispatcher>}
          />
          <Route
            path="/welcome-patient"
            element={<WelcomePatient></WelcomePatient>}
          />
          <Route
            path="/ambulance-awaiting-dispatch"
            element={<AmbulanceAwaitingDispatch></AmbulanceAwaitingDispatch>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
