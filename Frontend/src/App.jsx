import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "./pages/landing.jsx";
import Authentication from "./pages/authentication.jsx";
import Home from "./pages/home.jsx";
import History from "./pages/history.jsx";
import './App.css'
import { AuthProvider } from "./contexts/AuthContext";
import VideoMeetComponent from "./pages/videoMeet.jsx";


function App() {

  return (
    <>

      <Router>
        <AuthProvider>
          <Routes>

            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/auth" element={<Authentication />}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/history" element={<History/>}></Route>
            <Route path=":url" element={<VideoMeetComponent/>}></Route>
          </Routes>
          </AuthProvider>
      </Router>

    </>
  )
}

export default App
