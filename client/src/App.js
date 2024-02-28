import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Role from "./pages/Role";
import CaseStudy from "./pages/CaseStudy";

function App() {
  
  return (
    <div>
    <ToastContainer />
 <BrowserRouter>
      <Routes>
      <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/role" element={<Role />} />
          <Route path="/casestudy" element={<CaseStudy />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
